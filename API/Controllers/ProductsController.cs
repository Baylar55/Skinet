using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController(IProductRepository repo) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts(string? brand, string? type, string? sort)
        {
            return Ok(await repo.GetProductsAsync(brand, type, sort));
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await repo.GetProductByIdAsync(id);
            if (product == null) return NotFound();
            return product;
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
        {
            return Ok(await repo.GetBrandsAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
        {
            return Ok(await repo.GetTypesAsync());
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Create(Product product)
        {
            repo.AddProduct(product);

            return await repo.SaveChangesAsync() ? CreatedAtAction("GetProduct", new { id = product.Id }, product) : BadRequest("Failed to create product.");
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, Product product)
        {
            if (product.Id != id || !ProductExists(id)) return BadRequest("Cannot update that Product");

            repo.UpdateProduct(product);

            return await repo.SaveChangesAsync() ? NoContent() : BadRequest("Failed to update the product");
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var product = await repo.GetProductByIdAsync(id);

            if (product is null) return NotFound();

            repo.DeleteProduct(product);

            return await repo.SaveChangesAsync() ? NoContent() : BadRequest("Failed to delete the product");
        }

        private bool ProductExists(int id)
        {
            return repo.ProductExists(id);
        }
    }
}
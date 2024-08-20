using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController(IGenericRepository<Product> repo) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts(string? brand, string? type, string? sort)
        {
            ProductSpecification spec = new ProductSpecification(brand, type, sort);

            var products = await repo.ListAsync(spec);

            return Ok(products);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await repo.GetByIdAsync(id);

            if (product == null) return NotFound();

            return product;
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
        {
            var spec = new BrandListSpecification();

            return Ok(await repo.ListAsync(spec));
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
        {
            var spec = new TypeListSpecification();

            return Ok(await repo.ListAsync(spec));
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Create(Product product)
        {
            repo.Add(product);

            return await repo.SaveAllAsync() ? CreatedAtAction("GetProduct", new { id = product.Id }, product) : BadRequest("Failed to create product.");
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, Product product)
        {
            if (product.Id != id || !ProductExists(id)) return BadRequest("Cannot update that Product");

            repo.Update(product);

            return await repo.SaveAllAsync() ? NoContent() : BadRequest("Failed to update the product");
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var product = await repo.GetByIdAsync(id);

            if (product is null) return NotFound();

            repo.Remove(product);

            return await repo.SaveAllAsync() ? NoContent() : BadRequest("Failed to delete the product");
        }

        private bool ProductExists(int id)
        {
            return repo.Exists(id);
        }
    }
}
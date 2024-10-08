using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductsController(IUnitOfWork unit) : BaseApiController
{
    [Cache(600)]
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts([FromQuery] ProductSpecParams specParams)
    {
        ProductSpecification spec = new ProductSpecification(specParams);

        return await CreatePagedResult(unit.Repository<Product>(), spec, specParams.PageIndex, specParams.PageSize);
    }

    [Cache(600)]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await unit.Repository<Product>().GetByIdAsync(id);

        if (product == null) return NotFound();

        return product;
    }

    [Cache(10000)]
    [HttpGet("brands")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
    {
        var spec = new BrandListSpecification();

        return Ok(await unit.Repository<Product>().ListAsync(spec));
    }

    [Cache(10000)]
    [HttpGet("types")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
    {
        var spec = new TypeListSpecification();

        return Ok(await unit.Repository<Product>().ListAsync(spec));
    }

    [InvalidateCache("api/products|")]
    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<Product>> Create(Product product)
    {
        unit.Repository<Product>().Add(product);

        return await unit.Complete() ? CreatedAtAction("GetProduct", new { id = product.Id }, product) : BadRequest("Failed to create product.");
    }

    [InvalidateCache("api/products|")]
    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<ActionResult> Update(int id, Product product)
    {
        if (product.Id != id || !ProductExists(id)) return BadRequest("Cannot update that Product");

        unit.Repository<Product>().Update(product);

        return await unit.Complete() ? NoContent() : BadRequest("Failed to update the product");
    }

    [InvalidateCache("api/products|")]
    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id)
    {
        var product = await unit.Repository<Product>().GetByIdAsync(id);

        if (product is null) return NotFound();

        unit.Repository<Product>().Remove(product);

        return await unit.Complete() ? NoContent() : BadRequest("Failed to delete the product");
    }

    private bool ProductExists(int id)
    {
        return unit.Repository<Product>().Exists(id);
    }
}

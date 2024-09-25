using API.DTOs.Order;
using API.Extensions;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Authorize]
public class OrdersController(ICartService cartService, IUnitOfWork unit) : BaseApiController
{
    [HttpPost]
    public async Task<ActionResult<Order>> CreateOrder(CreateOrderDTO orderDTO)
    {
        var email = User.GetEmail();

        var cart = await cartService.GetCartAsync(orderDTO.CartId);

        if (cart is null) return BadRequest("Cart not found");

        if (cart.PaymentIntentId is null) return BadRequest("No payment intent for this order");

        var items = new List<OrderItem>();

        foreach (var item in cart.Items)
        {
            var productItem = await unit.Repository<Product>().GetByIdAsync(item.ProductId);

            if (productItem is null) return BadRequest("Problem with the order");

            var itemOrdered = new ProductItemOrdered
            {
                ProductId = item.ProductId,
                PictureUrl = item.PictureUrl,
                ProductName = item.ProductName
            };

            var orderItem = new OrderItem
            {
                Price = productItem.Price,
                Quantity = item.Quantity,
                ItemOrdered = itemOrdered
            };

            items.Add(orderItem);
        }

        var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync(orderDTO.DeliveryMethodId);

        if (deliveryMethod is null) return BadRequest("No delivery method selected");

        var order = new Order
        {
            OrderItems = items,
            DeliveryMethod = deliveryMethod,
            ShippingAddress = orderDTO.ShippingAddress,
            Subtotal = items.Sum(x => x.Price * x.Quantity),
            Discount = orderDTO.Discount,
            PaymentIntentId = cart.PaymentIntentId,
            PaymentSummary = orderDTO.PaymentSummary,
            BuyerEmail = email
        };

        unit.Repository<Order>().Add(order);

        if (await unit.Complete()) return order;

        return BadRequest("Problem creating order");
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<OrderDTO>>> GetOrdersForUser()
    {
        var spec = new OrderSpecification(User.GetEmail());

        var orders = await unit.Repository<Order>().ListAsync(spec);

        var ordersToReturn = orders.Select(o => o.ToDto()).ToList();

        return Ok(ordersToReturn);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<OrderDTO>> GetOrderbyId(int id)
    {
        var spec = new OrderSpecification(User.GetEmail(), id);

        var order = await unit.Repository<Order>().GetEntityWithSpec(spec);

        if (order is null) return NotFound();

        return order.ToDto();
    }

}


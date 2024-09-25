using Core.Entities.OrderAggregate;

namespace API.DTOs.Order;

public class OrderDTO
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public required string BuyerEmail { get; set; }
    public required ShippingAddress ShippingAddress { get; set; }
    public required string DeliveryMethod { get; set; } 
    public decimal ShippingPrice { get; set; } 
    public required PaymentSummary PaymentSummary { get; set; } 
    public required List<OrderItemDTO> OrderItems { get; set; } 
    public decimal Subtotal { get; set; }
    public required string Status { get; set; } 
    public decimal Total { get; set; }
    public decimal Discount { get; set; }
    public required string PaymentIntentId { get; set; }
}

using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Infrastructure.Services;

public class CouponService : ICouponService
{
    public CouponService(IConfiguration config)
    {
        StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
    }
    public async Task<AppCoupon?> GetCouponFromPromoCode(string code)
    {
        var promotionService = new PromotionCodeService();
        var options = new PromotionCodeListOptions
        {
            Code = code
        };
        var promotionCodes = await promotionService.ListAsync(options);
        var promotionCode = promotionCodes.FirstOrDefault();
        var coupon = promotionCode?.Promotion?.Coupon;
        if (promotionCode != null && coupon != null)
        {
            return new AppCoupon
            {
                Name = coupon.Name,
                AmountOff = coupon.AmountOff,
                PercentOff = coupon.PercentOff,
                CouponId = coupon.Id,
                PromotionCode = promotionCode.Code
            };
        }
        return null;
    }
}

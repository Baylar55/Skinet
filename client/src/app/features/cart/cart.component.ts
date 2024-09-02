import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "../../shared/components/order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartService = inject(CartService);

  ngOnInit(): void {
    const cartId = localStorage.getItem('cart_id');
    if(cartId)
    {
      this.cartService.getCartItems(cartId).subscribe({
        next: prd=>console.log(prd),
        error: err=>console.log(err)
      })
    }
  }
}

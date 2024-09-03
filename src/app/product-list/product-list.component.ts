import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { selectProducts } from '../state/cart.selectors';
import { CartActions } from '../state/cart.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ReadonlyArray<Product>>;

  constructor(private store: Store) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadProducts()); // Dispatch load products action
    this.products$ = this.store.select(selectProducts); // Select products from the store
  }

  onAddToCart(product: Product) {
    this.store.dispatch(CartActions.addProduct({ product }));
  }
}

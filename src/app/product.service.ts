import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Observable<Array<Product>> {
    return of([
      { id: '1', name: 'Product 1', price: 10, quantity: 1 },
      { id: '2', name: 'Product 2', price: 20, quantity: 1 },
    ]);
  }
}

import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { cartReducer, productsReducer } from './state/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './state/cart.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      products: productsReducer, 
      cart: cartReducer 
    }),
    provideHttpClient(),
    provideEffects([CartEffects])
],
};

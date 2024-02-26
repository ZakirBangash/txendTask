import {configureStore} from '@reduxjs/toolkit';

import {product} from '../services/products';
import {setupListeners} from '@reduxjs/toolkit/query';
import cart from './cart';

export const store = configureStore({
  reducer: {
    cart: cart,
    [product.reducerPath]: product.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(product.middleware),
});

setupListeners(store.dispatch);

import {configureStore} from '@reduxjs/toolkit';

import {product} from '../services/products';
import {setupListeners} from '@reduxjs/toolkit/query';
import cart from './cart';
import auth from './auth';

export const store = configureStore({
  reducer: {
    cart: cart,
    auth: auth,
    [product.reducerPath]: product.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(product.middleware),
});

setupListeners(store.dispatch);

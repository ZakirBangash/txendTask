import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    category: {category_id: '174', category_name: 'Fashion and Clothing'},
    id: '73',
    price: '100',
    product_condition: 'New',
    subcategory: {
      sub_category_id: '190',
      sub_category_name: 'Shoes and Accessories',
    },
    title: 'Nike dunk low ',
    user_id: '251',
    quantity: 10,
  },
  {
    category: {category_id: '174', category_name: 'Fashion and Clothing'},
    id: '43',
    price: '320',
    product_condition: 'New',
    subcategory: {
      sub_category_id: '190',
      sub_category_name: 'Shoes and Accessories',
    },
    title: 'Nike dunk low ',
    user_id: '25534',
    quantity: 20,
  },
];

export const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    Increment: (state, action) => {
      const itemToUpdate = state.find(item => item.id === action.payload.id);

      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    Decrement: (state, action) => {
      const itemToUpdate = state.find(item => item.id === action.payload.id);

      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      }
    },
  },
});

export const {Increment, Decrement} = cart.actions;

export default cart.reducer;

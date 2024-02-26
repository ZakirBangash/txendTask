import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  login: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.login = true;
    },
  },
});

export const {updateAuth} = authSlice.actions;

export default authSlice.reducer;

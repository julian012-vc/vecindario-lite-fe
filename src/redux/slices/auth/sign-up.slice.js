import { createSlice } from '@reduxjs/toolkit';

export const signUpSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {},
    isLoading: false,
    errors: {},
  },
  reducers: {
    signUp: (state, action) => {
      state.data = action.payload;
      state.isLoading = true;
    },
    signUpWithErrors: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
    signUpSuccess: state => {
      state.data = {};
      state.errors = {};
      state.isLoading = false;
    },
  },
});

export const { signUp, signUpWithErrors, signUpSuccess } = signUpSlice.actions;

export default signUpSlice.reducer;

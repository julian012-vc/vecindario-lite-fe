import { createSlice } from '@reduxjs/toolkit';

export const signInSlice = createSlice({
  name: 'auth/sign-in',
  initialState: {
    data: {},
    isLoading: false,
    errors: {},
  },
  reducers: {
    signIn: (state, action) => {
      state.data = action.payload;
      state.isLoading = true;
    },
    signInWithErrors: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
    signInSuccess: state => {
      state.data = {};
      state.errors = {};
      state.isLoading = false;
    },
    cleanSignIn: state => {
      state.data = {};
      state.isLoading = false;
      state.errors = {};
    },
  },
});

export const { cleanSignIn, signIn, signInSuccess, signInWithErrors } = signInSlice.actions;

export default signInSlice.reducer;

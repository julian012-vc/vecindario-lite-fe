// TODO Install and use
// import { createSelector } from 'reselect'

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: state => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;

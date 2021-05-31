// TODO Install and use
// import { createSelector } from 'reselect'

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },    
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        }
    }
})

export const { logged } = userSlice.actions;

export default userSlice.reducer;

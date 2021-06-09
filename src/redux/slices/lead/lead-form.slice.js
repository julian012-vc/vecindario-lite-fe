import { createSlice } from '@reduxjs/toolkit';

export const leadFormSlice = createSlice({
  name: 'lead/lead-form',
  initialState: {
    data: {},
    isLoading: false,
    errors: {},
    isCreated: false,
  },
  reducers: {
    createLead: (state, action) => {
      state.data = action.payload;
      state.isLoading = true;
    },
    cleanCreateLead: state => {
      state.data = {};
      state.errors = {};
      state.isLoading = false;
      state.isCreated = false;
    },
    createLeadSucess: (state, action) => {
      state.data = {};
      state.errors = {};
      state.isLoading = false;
      state.isCreated = true;
    },
    createLeadWithErrors: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
  },
});

export const { createLead, createLeadSucess, createLeadWithErrors, cleanCreateLead } =
  leadFormSlice.actions;

export default leadFormSlice.reducer;

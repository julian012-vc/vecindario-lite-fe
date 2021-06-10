import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    current: '',
  },
  reducers: {
    openModal: (state, action) => {
      state.current = action.payload;
    },
    closeModal: (state, action) => {
      state.current = '';
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;

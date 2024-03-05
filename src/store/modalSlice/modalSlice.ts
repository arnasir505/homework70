import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Contact } from '../../types';
import { RootState } from '../../app/store';
import { deleteContact } from './modalThunks';

interface modalState {
  contact: Contact;
  show: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: modalState = {
  contact: {
    id: '',
    name: '',
    phone: '',
    email: '',
    photo: '',
  },
  show: false,
  loading: false,
  error: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload: contact }: PayloadAction<Contact>) => {
      state.show = true;
      state.contact = contact;
    },
    closeModal: (state) => {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const modalReducer = modalSlice.reducer;
export const selectModalShow = (state: RootState) => state.modal.show;
export const selectModalContact = (state: RootState) => state.modal.contact;
export const selectModalLoading = (state: RootState) => state.modal.loading;
export const { openModal, closeModal } = modalSlice.actions;

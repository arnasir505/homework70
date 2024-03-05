import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Contact } from '../../types';
import { RootState } from '../../app/store';

interface modalState {
  contact: Contact;
  show: boolean;
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
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, {payload: contact}: PayloadAction<Contact>) => {
      state.show = true;
      state.contact = contact
    },
    closeModal: (state) => {
      state.show = false;
    }
  },
});

export const modalReducer = modalSlice.reducer;
export const selectModalShow = (state: RootState) => state.modal.show;
export const selectModalContact = (state: RootState) => state.modal.contact;
export const { openModal, closeModal } = modalSlice.actions;

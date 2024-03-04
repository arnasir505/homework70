import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Contact } from '../../types';
import { RootState, store } from '../../app/store';

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
    openModal: (state) => {
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false;
    },
    updateModal: (
      state,
      { payload: foundContact }: PayloadAction<Contact | undefined>
    ) => {
      if (foundContact) {
        state.contact = foundContact;
      }
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const selectModalShow = (state: RootState) => state.modal.show;
export const selectModalContact = (state: RootState) => state.modal.contact;
export const { openModal, closeModal, updateModal } = modalSlice.actions;

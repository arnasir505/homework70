import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiContact } from '../../types';
import React from 'react';
import { RootState } from '../../app/store';

interface ContactState {
  data: ApiContact;
  loading: boolean;
  error: boolean;
}

const initialState: ContactState = {
  data: {
    name: '',
    phone: '',
    email: '',
    photo: '',
  },
  loading: false,
  error: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateContact: (
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement>>
    ) => {
      state.data[action.payload.target.name as keyof ApiContact] =
        action.payload.target.value;
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { updateContact } = contactSlice.actions;
export const selectContact = (state: RootState) => state.contact.data;

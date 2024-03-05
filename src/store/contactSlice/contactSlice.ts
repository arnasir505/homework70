import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiContact } from '../../types';
import React from 'react';
import { RootState } from '../../app/store';
import { addContact, fetchContactForm } from './contactThunks';

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
    clearForm: (state) => {
      state.data = {
        name: '',
        phone: '',
        email: '',
        photo: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(fetchContactForm.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchContactForm.fulfilled,
        (state, { payload: contact }: PayloadAction<ApiContact>) => {
          state.loading = false;
          state.error = false;
          state.data = contact;
        }
      )
      .addCase(fetchContactForm.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const { updateContact, clearForm } = contactSlice.actions;
export const selectContact = (state: RootState) => state.contact.data;
export const selectContactLoading = (state: RootState) => state.contact.loading;

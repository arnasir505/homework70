import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiContact } from '../../types';

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact: ApiContact) => {
    await axiosApi.post('/contacts.json', contact);
  }
);

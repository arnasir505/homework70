import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiContacts } from '../../types';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const { data: contacts } = await axiosApi.get<ApiContacts | null>(
    '/contacts.json'
  );
  if (contacts === null) {
    throw new Error('Not found');
  }
  return contacts;
});

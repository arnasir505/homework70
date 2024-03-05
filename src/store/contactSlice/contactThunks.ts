import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiContact } from '../../types';
import { RootState } from '../../app/store';

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact: ApiContact) => {
    try {
      await axiosApi.post('/contacts.json', contact);
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateContactForm = createAsyncThunk<
  void,
  string,
  { state: RootState }
>('contact/update', async (id: string, thunkApi) => {
  try {
    const updatedContact = thunkApi.getState().contact.data;
    await axiosApi.put('/contacts/' + id + '.json', updatedContact);
  } catch (error) {
    console.log(error);
  }
});

export const fetchContactForm = createAsyncThunk(
  'contact/fetchForm',
  async (id: string) => {
    const { data: contact } = await axiosApi.get<ApiContact | null>(
      '/contacts/' + id + '.json'
    );
    if (contact === null) {
      throw new Error('Not Found');
    }
    return contact;
  }
);

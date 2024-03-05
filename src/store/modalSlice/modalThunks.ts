import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id: string) => {
    try {
      await axiosApi.delete('/contacts/' + id + '.json');
    } catch (error) {
      console.log(error);
    }
  }
);

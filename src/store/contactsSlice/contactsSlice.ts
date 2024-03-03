import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiContacts, Contact } from '../../types';
import { fetchContacts } from './contactsThunks';
import { RootState } from '../../app/store';

interface ContactsState {
  list: Contact[];
  loading: boolean;
  error: boolean;
}

const initialState: ContactsState = {
  list: [],
  loading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, { payload: contacts }: PayloadAction<ApiContacts>) => {
          state.error = false;
          state.loading = false;
          state.list = Object.keys(contacts).map((id) => ({
            id: id,
            ...contacts[id],
          }));
        }
      )
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state: RootState) => state.contacts.list;
export const selectLoading = (state: RootState) => state.contacts.loading;
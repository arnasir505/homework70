import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from '../store/contactSlice/contactSlice';
import { contactsReducer } from '../store/contactsSlice/contactsSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from '../store/contactSlice/contactSlice';
import { contactsReducer } from '../store/contactsSlice/contactsSlice';
import { modalReducer } from '../store/modalSlice/modalSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    contacts: contactsReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

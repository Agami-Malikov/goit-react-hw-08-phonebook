import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter-reducer';
import contactsSlice from './items/items-slice';
import authReduser from './auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authReduser,
    contacts: contactsSlice,
    filter: filterReducer,
  },
});

export default store;

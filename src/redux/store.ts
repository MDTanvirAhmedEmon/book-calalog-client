import { configureStore } from '@reduxjs/toolkit'

import { api } from './api/apiSlice';
import searchSlice from './features/user/searchSlice';


const store = configureStore({
  reducer: {
    search: searchSlice,
    [api.reducerPath] : api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
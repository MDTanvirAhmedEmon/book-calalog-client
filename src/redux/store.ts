import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { api } from './api/apiSlice';
import searchSlice from './features/user/searchSlice';
import userSlice from './features/user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['search','api']
}

const rootReducer = combineReducers({ 
  search: searchSlice,
  user: userSlice,
  [api.reducerPath] : api.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
export const persistor = persistStore(store)
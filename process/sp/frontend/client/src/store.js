import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './features/auth';

// Configure persist
const persistConfig = {
    key: 'root', // The key for the storage
    storage,     // The storage engine (localStorage in this case)
    whitelist: ['auth'], // Only persist the auth slice
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer, // Use persisted reducer for the auth slice
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Create the persistor object
export const persistor = persistStore(store);

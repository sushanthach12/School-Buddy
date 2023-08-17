import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
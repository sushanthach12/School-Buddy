import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";


import userReducer from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./api/userApi";
import detailReducer from "./slices/detailSlice";
import { detailApi } from "./api/detailApi";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    users: userReducer,
    details: detailReducer,
    [userApi.reducerPath]: userApi.reducer,
    [detailApi.reducerPath]: detailApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(userApi.middleware, detailApi.middleware)
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)
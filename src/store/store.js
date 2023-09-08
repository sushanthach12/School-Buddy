import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";


import userReducer from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import detailReducer from "./slices/detailSlice";
import { detailApi } from "./api/detailApi";
import { authApi } from "./api/authApi";
import { templateApi } from "./api/templateApi";
import templateReducer from "./slices/templateSlice";
import { predefinedApi } from "./api/predefinedApi";
import predefinedReducer from "./slices/predefinedSlice";

const persistConfig = {
    key: 'root',
    storage
}

const appReducer = combineReducers({
    users: userReducer,
    details: detailReducer,
    templates: templateReducer,
    predefined: predefinedReducer,

    [authApi.reducerPath]: authApi.reducer,
    [detailApi.reducerPath]: detailApi.reducer,
    [templateApi.reducerPath]: templateApi.reducer,
    [predefinedApi.reducerPath]: predefinedApi.reducer
})

const persistedReducer = persistReducer(persistConfig, appReducer);

const rootReducer = (state, action) => {
    if(action.type === 'RESET') {
        return appReducer(undefined, action)
    }
    return persistedReducer(state, action)
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(authApi.middleware, detailApi.middleware, templateApi.middleware, predefinedApi.middleware)
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)
import { createSlice } from "@reduxjs/toolkit";
import { predefinedApi } from "../api/predefinedApi";


const initialState = {
    predefines: [],
}


const predefinedSlice = createSlice({
    name: 'predefined',
    initialState,
    reducers: {
        addPredefines: (state, action) => {
            state.predefines.push(action.payload)
        },
        removePredefines: (state, action) => {
            delete state.predefines.find((ele) => ele.id === action.payload)
        },
        resetPredefined: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(predefinedApi.endpoints.getAllUserPredefined.matchFulfilled, (state, { payload }) => {
            state.predefines = payload
        })
    }
})

export const { addPredefines, removePredefines, resetPredefined } = predefinedSlice.actions;

export default predefinedSlice.reducer;

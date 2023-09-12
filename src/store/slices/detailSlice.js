import { createSlice } from "@reduxjs/toolkit";
import { detailApi } from "../api/detailApi";


const initialState = {
    detail: null,
    error: null,
    status: 'idle' // 'idle' | 'fullfilled' | 'error'
}


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        onDetailSuccess: (state, action) => {
            state.detail = action.payload;
            state.error = false
            state.status = "fullfilled"
        },
        onDetailFailed: (state) => {
            state.error = true;
            state.status = "error"
        },
        resetDetail: (state) => {
            state = initialState
        }
    },
})

export const { onDetailSuccess, onDetailFailed } = detailSlice.actions;

export default detailSlice.reducer;

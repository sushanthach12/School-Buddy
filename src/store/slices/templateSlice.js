import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userTemplates: null,
    template: null,
    error: null,
}


const templateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        addUserTemplates: (state, action) => {
            state.userTemplates = action.payload;
            state.error = false
        },
        addTemplate: (state, action) => {
            state.template = action.payload;
            state.error = false
        },
        onTemplateFailed: (state) => {
            state.error = true;
        },
        resetTemplate: (state) => {
            state = initialState
        }
    },
})

export const { onDetailSuccess, onDetailFailed } = templateSlice.actions;

export default templateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userTemplates: [],
    template: null,
    error: null,
}


const templateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        addUserTemplates: (state, action) => {
            state.userTemplates.push(action.payload)
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

export const { addTemplate, addUserTemplates, onTemplateFailed, resetTemplate } = templateSlice.actions;

export default templateSlice.reducer;

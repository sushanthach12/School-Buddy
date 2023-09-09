import { createSlice } from "@reduxjs/toolkit";
import { templateApi } from "../api/templateApi";


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
    extraReducers: (builder) => {
        builder.addMatcher(templateApi.endpoints.getTemplateByTagline.matchFulfilled, (state, { payload }) => {
            state.template = payload
        })
    }
})

export const { addTemplate, addUserTemplates, onTemplateFailed, resetTemplate } = templateSlice.actions;

export default templateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
    loggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logginSuccess: (state, action) => {
            state.loggedIn = true;
            state.user = action.payload;
            state.error = false
        },
        loggedInFailed: (state) => {
            state.loggedIn = false;
            state.error = true;
        }
    }
})

export const { logginSuccess, loggedInFailed } = userSlice.actions;

export default userSlice.reducer;
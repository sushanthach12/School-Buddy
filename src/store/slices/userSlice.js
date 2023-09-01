import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    error: null,
    loggedIn: false,
    status: 'idle'
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logginSuccess: (state, action) => {
            state.loggedIn = true;
            state.user = action.payload;
            state.error = false
            state.status = "fullfilled"
        },
        loggedInFailed: (state) => {
            state.loggedIn = false;
            state.error = true;
            state.status = "error"
        },
        logout: (state) => {
            localStorage.removeItem('persist:root')
            state.user = initialState.user
            state.loggedIn = initialState.loggedIn
            state.error = initialState.error
            state.status = initialState.status
        }
    },
})

export const getUser = (state) => state.users.user
export const getToken = (state) => state.users.user.token

export const { logginSuccess, loggedInFailed, logout } = userSlice.actions;

export default userSlice.reducer;

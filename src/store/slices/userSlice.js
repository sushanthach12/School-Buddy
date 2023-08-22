import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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
        },
        loggedInFailed: (state) => {
            state.loggedIn = false;
            state.error = true;
        },
        logout: (state) => {
            state.user = initialState.user
            state.loggedIn = initialState.loggedIn
            state.error = initialState.error
        }
    },
    extraReducers(builder) {
        builder
            //register user
            .addCase(registerUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
                state.loggedIn = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            //login user
            .addCase(loginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
                state.loggedIn = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { logginSuccess, loggedInFailed, logout } = userSlice.actions;

export default userSlice.reducer;


export const registerUser = createAsyncThunk('user/register', async () => {
    try {
        // req to backend
    } catch (error) {
        return error.message
    }
})

export const loginUser = createAsyncThunk('user/login', async () => {
    try {
        // req to backend
    } catch (error) {
        return error.message
    }
})
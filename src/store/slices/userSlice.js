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

    }
})

export default userSlice.reducer;
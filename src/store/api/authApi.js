import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/auth' }),
    endpoints: (buidler) => ({
        registerUser: buidler.mutation({
            query: (credentials) => ({
                url: '/register',
                method: 'POST',
                body: { name: "hello", email: credentials.email, password: credentials.passwword }
            })
        })
    })
})

export const { } = authApi
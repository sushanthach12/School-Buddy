import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: '/auth/register',
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: { name: "Hello", email: credentials.email, password: credentials.password }
            })
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: { email: credentials.email, password: credentials.password }
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = userApi
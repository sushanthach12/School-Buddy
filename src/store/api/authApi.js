import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://school-buddy-backend.vercel.app/api/auth` }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: '/register',
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: { name: credentials.name, email: credentials.email, password: credentials.password }
            }),
            transformResponse: (response) => {
                return {
                    ...response?.user,
                    token: response?.token,
                }
            }
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: { email: credentials.email, password: credentials.password }
            }),
            transformResponse: (response) => {
                return {
                    ...response?.user,
                    ...response?.upload,
                    token: response?.token
                }
            }
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = authApi
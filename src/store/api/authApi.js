import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://school-buddy-backend.vercel.app/api/auth` }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: '/register',
                method: 'POST',
                headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
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
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
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
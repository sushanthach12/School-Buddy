import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ 
        // baseUrl: `http://64.227.150.164/api/auth`,
        baseUrl: `https://school-buddy-backend.vercel.app/api/auth`,
        // mode: 'cors',
        // credentials: 'same-origin',
        // prepareHeaders: (headers) => {
        //     headers.set("Content-Type", "application/json");
        //     headers.set('Access-Control-Allow-Origin', '*');

        //     return headers;
        // },

    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: '/register',
                method: 'POST',
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
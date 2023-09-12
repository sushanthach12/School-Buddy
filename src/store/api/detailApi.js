import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


export const detailApi = createApi({
    reducerPath: "detailApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://school-buddy-backend.vercel.app/api/detail` }),
    endpoints: (builder) => ({
        createDetail: builder.mutation({
            query: ({ body, token }) => ({
                url: '/create',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            transformResponse: (response) => {
                return response?.Detail
            }
        }),
        getDetails: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET'
            })
        }),
        transformResponse: (response) => {
            return response["Detail"]
        }
    })
})

export const {
    useCreateDetailMutation,
    useGetDetailsQuery
} = detailApi
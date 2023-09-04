import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


export const predefinedApi = createApi({
    reducerPath: "predefinedApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/predefined' }),
    tagTypes: ['Predefined'],
    endpoints: (builder) => ({
        getAllUserPredefined: builder.query({
            query: ({ userId }) => ({ url: `/getallpredefined/${userId}` }),
            providesTags: ['Predefined']
        }),
        addPredefined: builder.mutation({
            query: (body) => ({
                url: '/createpredefined',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body
            }),
            transformResponse: (response) => {
                return {
                    id: response._id,
                    userId: response.userId,
                    title: response.title,
                    description: response.description,
                    templateId: response.templateId
                }
            },
            invalidatesTags: ['Predefined']
        }),

    })
})

export const {
    useAddPredefinedMutation,
    useGetAllUserPredefinedQuery
} = predefinedApi
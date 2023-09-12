import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


export const predefinedApi = createApi({
    reducerPath: "predefinedApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://school-buddy-backend.vercel.app/api/predefined` }),
    tagTypes: ['Predefined', 'GetPredefined'],
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
        getPredefined: builder.query({
            query: ({id}) => ({
                url: `/getpredefinedbyid/${id}`,
                method: 'GET',
            }),
            transformResponse: (response) => {
                return {
                    id: response._id,
                    userId: response.userId,
                    title: response.title,
                    description: response.description,
                    templateId: response?.templateId
                }
            },
            providesTags: ['GetPredefined']
        }),
        editPredefined: builder.mutation({
            query: ({body, id}) => ({
                url: `/updatepredefined/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['GetPredefined']
        })

    })
})

export const {
    useAddPredefinedMutation,
    useGetAllUserPredefinedQuery,
    useGetPredefinedQuery,
    useEditPredefinedMutation
} = predefinedApi
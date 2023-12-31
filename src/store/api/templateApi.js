import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const templateApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api/template` }),
    endpoints: (builder) => ({
        createTemplate: builder.mutation({
            query: (template) => ({
                url: '/createtemplate',
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: template
            })
            ,
            transformResponse: (response) => {
                response['id'] = response?._id;
                delete response?._id
                return response
            }
        }),
        getTemplate: builder.query({
            query: (id) => ({
                url: `/gettemplatebyid/${id}`,
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            }),
        }),
        getUserTemplates: builder.query({
            query: (userId) => ({
                url: `/getalltemplate/${userId}`,
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            })
        }),
        getTemplateByTagline: builder.query({
            query: ({ tagId }) => ({
                url: `/gettemplatebytag/${tagId} `,
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            }),
        }),
        updateTemplate: builder.mutation({
            query: ({ id, body }) => ({
                url: `/updatetemplate/${id}`,
                method: 'PUT',
                body
            })
        })
    })
})

export const {
    useCreateTemplateMutation,
    useGetTemplateQuery,
    useGetUserTemplatesQuery,
    useGetTemplateByTaglineQuery,
    useLazyGetTemplateByTaglineQuery,
    useUpdateTemplateMutation
} = templateApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


export const invoiceApi = createApi({
    reducerPath: "invoiceApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://64.227.150.164/api/invoice` }),
    // baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8080/api/invoice` }),
    endpoints: (builder) => ({
        createInvoice: builder.mutation({
            query: (body) => ({
                url: '/createinvoice',
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                    'Accept': 'application/pdf'
                },
                body
            }),
        }),
        getAllInvoicesByUserId: builder.query({
            query: (userId) => ({
                url: `/getallinvoice/${userId}`,
                method: 'GET'
            })
        }),
        getInvoiceUpload: builder.query({
            query: ({userId, invoiceId}) => ({
                url: `/getinvoiceupload?userId=${userId}&invoiceId=${invoiceId}`,
                method: 'GET'
            })
        })
    })
})

export const {
    useCreateInvoiceMutation,
    useGetAllInvoicesByUserIdQuery,
    useGetInvoiceUploadQuery,
    useLazyGetInvoiceUploadQuery
} = invoiceApi
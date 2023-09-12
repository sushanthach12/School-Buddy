import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


export const invoiceApi = createApi({
    reducerPath: "invoiceApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://school-buddy-backend.vercel.app/api/invoice` }),
    endpoints: (builder) => ({
        createInvoice: builder.mutation({
            query: (body) => ({
                url: '/createinvoice',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body
            })
        }),
        getAllInvoicesByUserId: builder.query({
            query: (userId) => ({
                url: `/getallinvoice/${userId}`,
                method: 'GET'
            })
        })
    })
})

export const {
    useCreateInvoiceMutation,
} = invoiceApi
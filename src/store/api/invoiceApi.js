import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


export const invoiceApi = createApi({
    reducerPath: "invoiceApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://school-buddy-backend.vercel.app/api/invoice` }),
    // baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8080/api/invoice` }),
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
    })
})

export const {
    useCreateInvoiceMutation,
} = invoiceApi
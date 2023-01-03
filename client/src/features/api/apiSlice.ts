import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BaseURL = process.env.BASE_URL || 'http://localhost:3000'
console.log({baseurl: BaseURL, en: process.env.BASE_URL});

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
	tagTypes: ['Todos'],
	endpoints: () => ({}),
})

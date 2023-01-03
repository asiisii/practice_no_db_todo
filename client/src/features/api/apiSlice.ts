import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.URL || 'http://localhost:3000'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ['Todos'],
	endpoints: () => ({}),
})

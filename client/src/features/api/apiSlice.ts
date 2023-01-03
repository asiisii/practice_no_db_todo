import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BaseURL = process.env.BASE_URL || 'http://localhost:3000'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
	tagTypes: ['Todos'],
	endpoints: () => ({}),
})

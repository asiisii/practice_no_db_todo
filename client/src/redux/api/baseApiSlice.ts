import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApiSlice = createApi({
	reducerPath: 'todos',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/',
	}),
	endpoints: () => ({}),
})

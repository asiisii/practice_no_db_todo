import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://musical-snickerdoodle-afc0db.netlify.app/',
	}),
	tagTypes: ['Todos'],
	endpoints: () => ({}),
})

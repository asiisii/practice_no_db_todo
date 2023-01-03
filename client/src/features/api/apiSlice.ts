import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL =
	'https://musical-snickerdoodle-afc0db.netlify.app/' || 'http://localhost:3000'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ['Todos'],
	endpoints: () => ({}),
})

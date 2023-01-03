import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	tagTypes: ['Todos'],
	endpoints: () => ({}),
})

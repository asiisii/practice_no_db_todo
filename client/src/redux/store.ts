import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { baseApiSlice } from './api/baseApiSlice'

const reducer = combineReducers({
	[baseApiSlice.reducerPath]: baseApiSlice.reducer,
})

export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseApiSlice.middleware),
    devTools: true
})

export type AppDispatch = typeof store.dispatch

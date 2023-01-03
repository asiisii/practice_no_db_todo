import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { todoApiSlice } from './features/api/todosApiSlice'
import App from './App'
import './main.css'

store.dispatch(todoApiSlice.endpoints.getTodo.initiate(undefined))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		,
	</React.StrictMode>
)

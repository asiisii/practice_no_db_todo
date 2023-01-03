import { apiSlice } from '../api/apiSlice'

interface Todo {
	id: string
	item: string
	complete: boolean
}

export const todoApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getTodo: builder.query({
			query: () => '/todos',
			transformResponse: (todos: Todo[]) => todos.reverse(),
			providesTags: ['Todos'],
		}),
		addTodo: builder.mutation({
			query: (todo: Todo) => ({
				url: '/todos',
				method: 'POST',
				body: JSON.stringify(todo),
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			invalidatesTags: ['Todos'],
		}),
		deleteTodo: builder.mutation({
			query: (id: string) => ({
				url: `/todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Todos'],
		}),
		toggleComplete: builder.mutation({
			query: (id: string) => ({
				url: `/todos/${id}/complete`,
				method: 'PATCH',
			}),
			invalidatesTags: ['Todos'],
		}),
		updateTodo: builder.mutation({
			query: (updatedTodo: {
				id: string
				item: string
				complete: boolean
			}) => ({
				url: `/todos/${updatedTodo.id}`,
				method: 'PUT',
				body: JSON.stringify(updatedTodo),
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			invalidatesTags: ['Todos'],
		}),
	}),
})

export const {
	useGetTodoQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useToggleCompleteMutation,
	useUpdateTodoMutation,
} = todoApiSlice

export const getAllTodoItems = todoApiSlice.endpoints.getTodo.select(undefined)

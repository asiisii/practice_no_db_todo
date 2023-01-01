import { baseApiSlice } from '../../api/baseApiSlice'

interface Todo {
	id: string
	item: string
	completed: boolean
}

export const todoApiSlice = baseApiSlice.injectEndpoints({
	endpoints: builder => ({
		getTodo: builder.query({
			query: () => 'todos',
		}),
		addTodo: builder.mutation({
			query: (todo: Todo) => ({
				url: 'todos',
				method: 'POST',
				body: JSON.stringify(todo),
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
		deleteTodo: builder.mutation({
			query: (id: string) => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
		}),
		toggleComplete: builder.mutation({
			query: (id: string) => ({
				url: `todos/${id}/complete`,
				method: 'PATCH',
			}),
		}),
		updateTodo: builder.mutation({
			query: (updatedTodo: {
				id: string
				item: string
				complete: boolean
			}) => ({
				url: `todos/${updatedTodo.id}`,
				method: 'PUT',
				body: JSON.stringify(updatedTodo),
				headers: {
					'Content-Type': 'application/json',
				},
			}),
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

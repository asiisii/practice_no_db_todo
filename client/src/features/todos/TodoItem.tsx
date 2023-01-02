import { useState } from 'react'
import {
	useDeleteTodoMutation,
	useToggleCompleteMutation,
	useUpdateTodoMutation,
} from '../api/todosApiSlice'

type TodoItemProps = {
	id: string
	item: string
	complete: boolean
}

const TodoItem = ({ id, item, complete }: TodoItemProps) => {
	const [show, setShow] = useState(false)
	const [description, setDescription] = useState(item)

	const [deleteTodo] = useDeleteTodoMutation()
	const [toggleComplete] = useToggleCompleteMutation()
	const [updateTodo] = useUpdateTodoMutation()

	const showEditModal = () => setShow(prevShow => !prevShow)

	const updateTodoItem = () => {
		const updatedTodo = {
			id: id,
			item: description,
			complete: complete,
		}
		updateTodo(updatedTodo)
		showEditModal()
	}

	return show ? (
		<form onSubmit={e => e.preventDefault()} key={id}>
			<input
				type='text'
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<button onClick={updateTodoItem}>Update</button>
			<button onClick={showEditModal}>Cancel</button>
		</form>
	) : (
		<div key={id}>
			<input
				type='checkbox'
				checked={complete}
				onChange={() => toggleComplete(id)}
			/>
			<span style={{ textDecoration: complete ? 'line-through' : '' }}>
				{item}
			</span>
			<button onClick={showEditModal}>Update</button>
			<button onClick={() => deleteTodo(id)}>Delete</button>
		</div>
	)
}

export default TodoItem

import React, { useState } from 'react'
import EditTodo from './EditTodo'
import {
	useDeleteTodoMutation,
	useToggleCompleteMutation,
	useUpdateTodoMutation,
} from '../redux/features/todos/todosApiSlice'

const TodoItem = ({ id, item, complete, refetch }) => {
	const [show, setShow] = useState(false)
	const [description, setDescription] = useState(item)

	const [deleteTodo] = useDeleteTodoMutation()
	const [toggleComplete] = useToggleCompleteMutation()
	const [updateTodo] = useUpdateTodoMutation()

	const showEditModal = () => setShow(prevShow => !prevShow)

	const handleDelete = async () => {
		await deleteTodo(id)
		refetch()
	}

	const markComplete = async () => {
		await toggleComplete(id)
		refetch()
	}

	const updateTodoItem = async () => {
		const updatedTodo = {
			id: id,
			item: description,
			complete: complete,
		}
		await updateTodo(updatedTodo)
		refetch()
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
			<input type='checkbox' checked={complete} onChange={markComplete} />
			<span style={{ textDecoration: complete ? 'line-through' : '' }}>
				{item}
			</span>
			<button onClick={showEditModal}>Update</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	)
}

export default TodoItem

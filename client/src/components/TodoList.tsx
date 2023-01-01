import TodoItem from './TodoItem'

type TodoListProps = {
	refetch: () => void
	todoList: {
		id: number
		item: string
		complete: boolean
	}[]
}

const TodoList = ({ todoList, refetch }: TodoListProps) => {
	return (
		<ul>
			{todoList.map(todo => (
				<TodoItem
					id={todo.id}
					item={todo.item}
					complete={todo.complete}
					refetch={refetch}
					key={todo.id}
				/>
			))}
		</ul>
	)
}

export default TodoList

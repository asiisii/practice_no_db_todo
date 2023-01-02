import TodoItem from './TodoItem'

type TodoListProps = {
	todoList: {
		id: string
		item: string
		complete: boolean
	}[]
}

const TodoList = ({ todoList }: TodoListProps) => {
	return (
		<ul>
			{todoList.map(todo => (
				<TodoItem
					id={todo.id}
					item={todo.item}
					complete={todo.complete}
					key={todo.id}
				/>
			))}
		</ul>
	)
}

export default TodoList

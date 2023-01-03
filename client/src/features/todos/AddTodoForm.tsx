import { useForm, SubmitHandler } from 'react-hook-form'
import TodoList from './TodoList'
import { useAddTodoMutation, getAllTodoItems } from '../api/todosApiSlice'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'

type Inputs = {
	item: string
}

const AddTodoForm = () => {
	const data = useSelector(getAllTodoItems)
	const { data: todoList, isLoading, isSuccess, isError } = data
	const [addTodo] = useAddTodoMutation()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = data => {
		const newData = {
			id: uuidv4(),
			item: data.item,
			complete: false,
		}
		addTodo(newData)
		reset()
	}

	return (
		<div className='flex flex-col justify-between mr-auto ml-auto mt-12 text-4xl max-w-xl items-center max-h-[70vh] overflow-hidden'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					{errors.item && (
						<p className='bg-red-500 text-white'>This field is required</p>
					)}
					<input
						placeholder=' Add todo...'
						{...register('item', { required: true })}
						className='rounded-l-xl p-5 caret-[#05AEA0]'
						autoComplete='off'
					/>

					<input
						className='bg-[#6744a9] hover:bg-[#05AEA0] cursor-pointer rounded-r-xl p-5'
						type='submit'
					/>
				</div>
			</form>
			{isError ? (
				<>Oh no, there was an error, check to see if the server is running.</>
			) : isLoading ? (
				<>Loading...</>
			) : isSuccess ? (
				<TodoList todoList={todoList} />
			) : (
				'You have no todo task'
			)}
		</div>
	)
}

export default AddTodoForm

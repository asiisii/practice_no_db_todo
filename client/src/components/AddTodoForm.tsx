import { useForm, SubmitHandler } from 'react-hook-form'
import TodoList from './TodoList'
import {
	useGetTodoQuery,
	useAddTodoMutation,
} from '../redux/features/todos/todosApiSlice'
import { v4 as uuidv4 } from 'uuid'

type Inputs = {
	item: string
}

type TodoList = {
	id: number
	item: string
	complete: boolean
}[]

const AddTodoForm = () => {
	const { data, isLoading, isFetching, error, refetch } = useGetTodoQuery()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>()

	const [addTodo] = useAddTodoMutation()

	const onSubmit: SubmitHandler<Inputs> = async data => {
		const newData = {
			id: uuidv4(),
			item: data.item,
			complete: false,
		}
		await addTodo(newData)
		refetch()
		reset()
	}

	return (
		<div className='flex flex-col justify-between mr-auto ml-auto mt-12 text-4xl max-w-xl'>
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
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<TodoList todoList={data} refetch={refetch} />
			) : (
				'You have no todo task'
			)}
		</div>
	)
}

export default AddTodoForm

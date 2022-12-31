import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	item: string
}

const AddItem = () => {
	const {
		register,
		handleSubmit,
    reset,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data); 
    reset()
  }
	return (
		<form
			className='flex justify-between mr-auto ml-auto mt-12 text-4xl max-w-xl'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
        {errors.item && <p className='bg-red-500 text-white'>This field is required</p>}
				<input
					placeholder=' Add an item'
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
	)
}

export default AddItem

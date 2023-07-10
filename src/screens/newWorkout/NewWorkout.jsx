import { Link } from 'react-router-dom'

import Field from '../../components/ui/Field/Field'
import Alert from '../../components/ui/alert/Alert'
import Button from '../../components/ui/button/Button'
import Loader from '../../components/ui/loader/Loader'

import Layout from '../../components/layout/Layout'

import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		error,
		register,
		isLoading,
		isSuccess,
		handleSubmit,
		onSubmit,
		errors,
		control
	} = useNewWorkout()
	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>
					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<SelectExercises control={control} />
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout

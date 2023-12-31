import { $axios } from '../../api'

export const EXERCISES = '/exercises'
const ExerciseService = {
	getAll: async () => {
		return $axios.get(EXERCISES)
	},
	create: async body => {
		return $axios.post(EXERCISES, body)
	},
	update: async (body, id) => {
		return $axios.put(`${EXERCISES}/${id}`, body)
	},
	delete: async id => {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}
export default ExerciseService

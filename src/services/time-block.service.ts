import {
	ITimeBlockResponce,
	TypeTimeBlockFormState
} from '@/types/time-block.types'

import { axiosAuth } from '@/api/intercepter'

class TimeBlockService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlocks() {
		const response = await axiosAuth.get<ITimeBlockResponce[]>(this.BASE_URL)
		return response
	}

	async createTimeBlock(data: TypeTimeBlockFormState) {
		const response = await axiosAuth.post(this.BASE_URL, data)
		return response
	}

	async updateOrderTimeBlock(ids: string[]) {
		const response = await axiosAuth.put(`${this.BASE_URL}/update-order`, {
			ids
		})
		return response
	}

	async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
		const response = await axiosAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTimeBlock(id: string) {
		const response = await axiosAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const timeBlockService = new TimeBlockService()

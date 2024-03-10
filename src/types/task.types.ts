export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high'
}
export interface ITaskResponce {
	id: string
	createdAt?: string
	updatedAt?: string
	name: string
	priority: EnumTaskPriority
	isCompleted: boolean
}
export type TypeTaskFormState = Partial<Omit<ITaskResponce, 'id' | 'updatedAt'>>

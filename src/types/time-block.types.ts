export interface ITimeBlockResponce {
	id: string
	createdAt?: string
	updatedAt?: string
	name: string
	duration: number
	order: number
	color?: string
}
export type TypeTimeBlockFormState = Partial<
	Omit<ITimeBlockResponce, 'createdAt' | 'updatedAt'>
>

export interface IPomodoroRoundResponce {
	id: string
	createdAt?: string
	updatedAt?: string
	isCompleted?: boolean
	totalSeconds: number
}
export interface IPomodoroSessionResponce {
	id: string
	createdAt?: string
	updatedAt?: string
	isCompleted?: boolean
	rounds?: IPomodoroRoundResponce[]
}
export type TypePomodoroSessionState = Partial<
	Omit<IPomodoroSessionResponce, 'id' | 'createdAt' | 'updatedAt'>
>
export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRoundResponce, 'id' | 'createdAt' | 'updatedAt'>
>

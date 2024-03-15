import type { Dispatch, SetStateAction } from 'react'

import type { IPomodoroRoundResponce } from '@/types/pomodoro.types'

export interface ITimerState {
	isRunning: boolean
	secondsLeft: number
	activeRound: IPomodoroRoundResponce | undefined

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponce | undefined>>
}

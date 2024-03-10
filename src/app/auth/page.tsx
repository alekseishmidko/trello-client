import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Auth from './Auth'

export const metadata: Metadata = { title: 'Auth', ...NO_INDEX_PAGE }

type Props = {}
const AuthPage = (props: Props) => {
	return <Auth />
}

export default AuthPage

import type { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout/DashBoardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}

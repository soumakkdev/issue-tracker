import { ColumnDef } from '@tanstack/react-table'
import { IssuesTable } from './IssuesTable'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { useIssues } from './Issues.data'
import { useRouter } from 'next/router'

type Payment = {
	id: string
	amount: number
	status: 'pending' | 'processing' | 'success' | 'failed'
	email: string
}

export const data: Payment[] = [
	{
		id: '728ed52f',
		amount: 100,
		status: 'pending',
		email: 'm@example.com',
	},
	{
		id: '489e1d42',
		amount: 125,
		status: 'processing',
		email: 'example@gmail.com',
	},
	// ...
]

const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
	},
]

export default function IssuesList() {
	const { query } = useRouter()
	const projectId = query?.projectId as string
	const { data: issues } = useIssues(projectId)
	console.log(issues)
	return (
		<div className="container py-5">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold mb-4">Issues</h2>
				<Button className="gap-2 pl-3">
					<Plus className="h-4 w-4" />
					Issue
				</Button>
			</div>

			<IssuesTable columns={columns} data={data} />
		</div>
	)
}

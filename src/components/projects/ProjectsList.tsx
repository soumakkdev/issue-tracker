import { FolderOpen, MoreHorizontal, MoreVertical } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/dropdown-menu'
import Link from 'next/link'

export default function ProjectsList() {
	return (
		<div className="container py-5">
			<h2 className="text-2xl font-bold mb-4">Projects</h2>
			<div className="grid grid-cols-4 gap-5">
				<Link href="/issues">
					<div className="rounded-lg bg-card p-5 shadow-sm hover:shadow">
						<div className="flex items-center gap-3">
							<FolderOpen className="h-5 w-5" />
							<p className="flex-1">Twitter App</p>

							<DropdownMenu>
								<DropdownMenuTrigger>
									<MoreHorizontal className="h-5 w-5 text-muted-foreground" />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>Rename</DropdownMenuItem>
									<DropdownMenuItem>Delete</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

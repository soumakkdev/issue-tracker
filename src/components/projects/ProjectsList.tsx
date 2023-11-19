import { FolderOpen, MoreHorizontal, MoreVertical, Plus } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/dropdown-menu'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useProjects } from './Project.data'

export default function ProjectsList() {
	const { data: projects, isLoading, isError } = useProjects()
	return (
		<div className="container py-5">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold mb-4">Projects</h2>
				<Button className="gap-2 pl-3">
					<Plus className="h-4 w-4" />
					Project
				</Button>
			</div>
			<div className="grid grid-cols-4 gap-5">
				{isLoading ? (
					<div>Loading...</div>
				) : (
					projects?.map((project) => (
						<Link href="/issues" key={project.id}>
							<div className="rounded-lg bg-card p-5 shadow-sm hover:shadow">
								<div className="flex items-center gap-3">
									<FolderOpen className="h-5 w-5" />
									<p className="flex-1">{project?.name}</p>

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
					))
				)}
			</div>
		</div>
	)
}

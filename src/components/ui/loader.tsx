import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import React from 'react'

export default function Loader(props: { className?: string; fullScreen?: boolean }) {
	const { className, fullScreen } = props

	if (fullScreen) {
		return (
			<div className="h-full w-full grid place-content-center">
				<Loader2 className={cn('h-8 w-8 animate-spin', className)} />
			</div>
		)
	} else {
		return <Loader2 className={cn('h-4 w-4 animate-spin', className)} />
	}
}

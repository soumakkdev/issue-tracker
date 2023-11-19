import { fetchWithAuth } from '@/lib/fetch'
import { IProject } from '@/types/projects'
import { useQuery } from '@tanstack/react-query'

export function useProjects() {
	return useQuery({
		queryKey: ['projects'],
		queryFn: () => fetchWithAuth('GET', '/api/projects'),
		select: (res) => res.data as IProject[],
	})
}

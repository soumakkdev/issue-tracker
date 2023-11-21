import { fetchWithAuth } from '@/lib/fetch'
import { IIssue } from '@/types/issues'
import { useQuery } from '@tanstack/react-query'

export const useIssues = (projectId: string) => {
	return useQuery({
		queryKey: ['projects', projectId, 'issues'],
		queryFn: () => fetchWithAuth('GET', `/api/projects/${projectId}/issues`),
		select: (res) => res.data as IIssue[],
	})
}

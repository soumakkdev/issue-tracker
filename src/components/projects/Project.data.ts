import { fetchWithAuth } from '@/lib/fetch'
import { ICreateProjectReq, IProject } from '@/types/projects'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useProjects() {
	return useQuery({
		queryKey: ['projects'],
		queryFn: () => fetchWithAuth('GET', '/api/projects'),
		select: (res) => res.data as IProject[],
	})
}

export function useAddProject() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (params: { body: ICreateProjectReq }) => {
			const { body } = params
			return fetchWithAuth('POST', '/api/projects', body)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] })
		},
	})
}

import { createProject, getProjects } from '@/controllers/projects'
import { withAuth } from '@/middlewares/withAuth'
import type { NextApiRequest, NextApiResponse } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		getProjects(req, res)
	} else if (req.method === 'POST') {
		createProject(req, res)
	}
}

export default withAuth(handler)

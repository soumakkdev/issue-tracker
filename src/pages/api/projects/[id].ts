import { deleteProject, updateProject } from '@/controllers/projects'
import { withAuth } from '@/middlewares/withAuth'
import type { NextApiRequest, NextApiResponse } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'PUT') {
		updateProject(req, res)
	} else if (req.method === 'DELETE') {
		deleteProject(req, res)
	}
}

export default withAuth(handler)

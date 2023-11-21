import { deleteIssue, getIssue, updateIssue } from '@/controllers/issues'
import { withAuth } from '@/middlewares/withAuth'
import type { NextApiRequest, NextApiResponse } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		getIssue(req, res)
	} else if (req.method === 'PUT') {
		updateIssue(req, res)
	} else if (req.method === 'DELETE') {
		deleteIssue(req, res)
	}
}

export default withAuth(handler)

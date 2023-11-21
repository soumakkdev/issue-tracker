import { createIssue, getIssues } from '@/controllers/issues'
import { withAuth } from '@/middlewares/withAuth'
import type { NextApiRequest, NextApiResponse } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		getIssues(req, res)
	} else if (req.method === 'POST') {
		createIssue(req, res)
	}
}

export default withAuth(handler)

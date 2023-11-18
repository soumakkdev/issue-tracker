import { auth } from '@/lib/firebase-admin'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

export const withAuth = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const authorization = req.headers.authorization
		const token = authorization?.split('Bearer ')[1]

		if (token) {
			const user = await auth.verifyIdToken(token)
			const uid = user.uid
			// req.uid = uid
			return handler(req, res)
		} else {
			throw new Error('No token found')
		}
	} catch (error: any) {
		console.log(error)
		res.status(401).json({ message: 'Unauthorized' })
	}
}

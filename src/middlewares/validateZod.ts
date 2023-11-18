import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { AnyZodObject, z } from 'zod'

export const validateReqBody = (handler: NextApiHandler, schema: AnyZodObject) => async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await schema.parseAsync(req.body)
		return handler(req, res)
	} catch (err) {
		if (err instanceof z.ZodError) {
			// return res.status(400).json({ errors: err.issues })
			return res.status(400).json({ errors: err.issues?.map((i) => ({ path: i.path, message: i.message })) })
		}
	}
}

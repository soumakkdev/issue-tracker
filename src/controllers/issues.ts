import prisma from '@/lib/prisma'
import { ICreateIssueReq, IUpdateIssueReq } from '@/types/issues'
import { NextApiRequest, NextApiResponse } from 'next'
import { toInt } from 'radash'

export async function getIssues(req: NextApiRequest, res: NextApiResponse) {
	try {
		const issues = await prisma.issue.findMany({})
		res.status(200).json({ data: issues, success: true })
	} catch (error) {
		res.status(400).json({ msg: 'Server error while fetching issues', error: true })
	}
}

export async function getIssue(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		const issue = await prisma.issue.findMany({
			where: {
				id: toInt(id),
			},
		})
		res.status(200).json({ data: issue, success: true })
	} catch (error) {
		res.status(400).json({ msg: 'Server error while fetching issue', error: true })
	}
}

export async function createIssue(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { name, description, dueDate, priority, status, projectId } = req.body as ICreateIssueReq
		const issue = await prisma.issue.create({
			data: {
				dueDate,
				name,
				priority,
				status,
				description,
				projectId: projectId,
			},
		})
		res.status(200).json({ data: issue, success: true })
	} catch (err) {
		res.status(400).json({ msg: 'Server error while creating issues', error: true })
	}
}

export async function updateIssue(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		const { name, description, dueDate, priority, status } = req.body as IUpdateIssueReq
		const issue = await prisma.issue.update({
			data: {
				dueDate,
				name,
				priority,
				status,
				description,
			},
			where: {
				id: toInt(id),
			},
		})
		res.status(200).json({ data: issue, success: true })
	} catch (err) {
		res.status(400).json({ msg: 'Server error while updating issues', error: true })
	}
}

export async function deleteIssue(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		const issue = await prisma.issue.delete({
			where: {
				id: toInt(id),
			},
		})
		res.status(200).json({ data: issue, success: true })
	} catch (err) {
		res.status(400).json({ msg: 'Server error while deleting issues', error: true })
	}
}

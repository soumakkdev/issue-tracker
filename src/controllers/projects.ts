import prisma from '@/lib/prisma'
import { ICreateProjectReq } from '@/types/projects'
import { NextApiRequest, NextApiResponse } from 'next'
import { toInt } from 'radash'

export async function getProjects(req: NextApiRequest, res: NextApiResponse) {
	try {
		const projects = await prisma.project.findMany({})
		res.status(200).json({ data: projects, success: true })
	} catch (error) {
		res.status(400).json({ msg: 'Server error while fetching projects', error: true })
	}
}

export async function createProject(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { name } = req.body as ICreateProjectReq
		const project = await prisma.project.create({
			data: {
				name,
			},
		})
		res.status(200).json({ data: project, success: true })
	} catch (err) {
		res.status(400).json({ msg: 'Server error while creating projects', error: true })
	}
}

export async function updateProject(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		const { name } = req.body as ICreateProjectReq
		const project = await prisma.project.update({
			data: {
				name,
			},
			where: {
				id: toInt(id),
			},
		})
		res.status(200).json({ data: project, success: true })
	} catch (err) {
		res.status(400).json({ msg: 'Server error while updating projects', error: true })
	}
}

export async function deleteProject(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		const project = await prisma.project.delete({
			where: {
				id: toInt(id),
			},
		})
		res.status(200).json({ data: project, success: true })
	} catch (err) {
		res.status(400).json({ msg: 'Server error while deleting projects', error: true })
	}
}

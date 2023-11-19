import z from 'zod'

const ZCreateProjectReq = z.object({
	name: z.string(),
})
export type ICreateProjectReq = z.infer<typeof ZCreateProjectReq>

const ZProject = z.object({
	id: z.number(),
	name: z.string(),
	icon: z.string().optional(),
})
export type IProject = z.infer<typeof ZProject>

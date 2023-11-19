import z from 'zod'

const ZCreateIssueReq = z.object({
	name: z.string(),
	priority: z.number(),
	status: z.number(),
	description: z.string().optional().nullable(),
	dueDate: z.string(),
	projectId: z.number(),
})
export type ICreateIssueReq = z.infer<typeof ZCreateIssueReq>

const ZUpdateIssueReq = z.object({
	name: z.string(),
	priority: z.number(),
	status: z.number(),
	description: z.string().optional().nullable(),
	dueDate: z.string(),
})
export type IUpdateIssueReq = z.infer<typeof ZUpdateIssueReq>

const ZIssue = z.object({
	id: z.number(),
	name: z.string(),
	priority: z.number(),
	status: z.number(),
	description: z.string().optional().nullable(),
	dueDate: z.string(),
})
export type IIssue = z.infer<typeof ZIssue>

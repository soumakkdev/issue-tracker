import { FormikField } from '@/lib/FormikField'
import { FormikProvider, useFormik } from 'formik'
import toast from 'react-hot-toast'
import { InputBox } from '../fields/InputBox'
import { Dialog } from '../ui/dialog'
import { useAddProject } from './Project.data'

interface IAddProjectForm {
	name: string
}

export default function AddProjectDialog(props: { open: boolean; onClose: () => void }) {
	const { onClose, open } = props
	const { mutate: addProject, isPending } = useAddProject()
	const formik = useFormik({
		initialValues: {
			name: '',
		},
		onSubmit,
	})

	function onSubmit(values: IAddProjectForm) {
		addProject(
			{ body: { name: values.name } },
			{
				onSuccess: () => {
					toast.success('Project added successfully')
				},
				onError: () => {
					toast.success('Failed to add project')
				},
				onSettled: () => {
					onClose()
				},
			}
		)
	}

	return (
		<FormikProvider value={formik}>
			<Dialog
				open={open}
				onClose={onClose}
				title="Add Project"
				onConfirm={() => formik.handleSubmit()}
				isConfirmDisabled={isPending}
				isCancelDisabled={isPending}
				isConfirmLoading={isPending}
			>
				<FormikField name="name">
					<InputBox id="project-name" label="Project Name" />
				</FormikField>
			</Dialog>
		</FormikProvider>
	)
}

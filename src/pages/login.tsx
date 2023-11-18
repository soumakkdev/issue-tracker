import { InputBox } from '@/components/fields/InputBox'
import { Button } from '@/components/ui/button'
import useLoading from '@/hooks/useLoading'
import { useAuth } from '@/lib/AuthContext'
import { FormikField } from '@/lib/FormikField'
import { FormikProvider, useFormik } from 'formik'
import { useRouter } from 'next/router'
import { tryit } from 'radash'
import toast from 'react-hot-toast'

export default function LoginPage() {
	const { replace } = useRouter()
	const { loading, startLoading, stopLoading } = useLoading()
	const { emailPasswordLogin } = useAuth()

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit,
	})

	async function onSubmit(values) {
		startLoading()
		const [err, res] = await tryit(emailPasswordLogin)(values)
		stopLoading()

		if (err) {
			// TODO: getting firebase error codes, need to send readable error messages
			return toast.error(err.message)
		}

		replace('/')
	}

	return (
		<div className="grid place-content-center h-full">
			<FormikProvider value={formik}>
				<form className="max-w-md mx-auto px-4" onSubmit={formik.handleSubmit}>
					<div className="space-y-4">
						<h1 className="text-3xl font-semibold">Welcome</h1>
						<h1 className="text-lg text-muted-foreground">Sign in to your account</h1>
						<FormikField name="email">
							<InputBox label="Email" size="lg" />
						</FormikField>
						<FormikField name="password">
							<InputBox label="Password" type="password" size="lg" />
						</FormikField>
						<p className="text-sm">By continuing, I agree to Nike&apos;s Privacy Policy and Terms of Use.</p>
						<Button disabled={loading} size="lg" type="submit">
							{loading ? 'Hold on' : 'Sign in'}
						</Button>
					</div>
				</form>
			</FormikProvider>
		</div>
	)
}

import IssuesList from '@/components/issues/IssuesList'
import Topbar from '@/components/layouts/Topbar'

export default function ProjectPage() {
	return (
		<section>
			<Topbar />
			<IssuesList />
		</section>
	)
}

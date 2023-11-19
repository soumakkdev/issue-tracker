import { AuthProvider } from '@/lib/AuthContext'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Toaster from 'react-hot-toast'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const fontSans = Inter({
	subsets: ['latin'],
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<main className={cn(fontSans.className, 'h-full')}>
					<Component {...pageProps} />
				</main>

				<Toaster />
				<ReactQueryDevtools />
			</AuthProvider>
		</QueryClientProvider>
	)
}

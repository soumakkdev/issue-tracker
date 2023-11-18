import { AuthProvider } from '@/lib/AuthContext'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Toaster from 'react-hot-toast'

export const fontSans = Inter({
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<main className={cn(fontSans.className, 'h-full')}>
				<Component {...pageProps} />
			</main>

			<Toaster />
		</AuthProvider>
	)
}

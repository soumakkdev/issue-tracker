import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

export const fontSans = Inter({
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={cn(fontSans.className)}>
			<Component {...pageProps} />
		</main>
	)
}

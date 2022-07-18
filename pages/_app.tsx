import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Ransomware groups list </title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</>
	)
}

export default MyApp

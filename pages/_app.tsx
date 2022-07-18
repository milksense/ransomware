import '../styles/globals.css'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
import Head from 'next/head'

const lightTheme = createTheme({
	type: 'light',
})

const darkTheme = createTheme({
	type: 'dark',
})

function MyApp({ Component, pageProps }) {
	const darkMode = useDarkMode(true)

	return (
		<>
			<Head>
				<title>Ransomware groups tracker</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
				<Component {...pageProps} />
			</NextUIProvider>
		</>
	)
}

export default MyApp

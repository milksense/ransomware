import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: <>{initialProps.styles}</>,
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{CssBaseline.flush()}
					<link
						rel="icon shortcut"
						type="image/x-icon"
						href="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import {
	Container,
	Button,
	Input,
	Spacer,
	Text,
	Link,
	Card,
	Grid,
	Loading,
	User,
} from '@nextui-org/react'

import TableComponent from './components/table'

const IndexPage: FC = () => {
	return (
		<Container justify="center" alignContent="center" xs>
			<Grid xs={12}>
				<Card css={{ px: '$10', mt: 20 }}>
					<Text
						h1
						size={60}
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
						}}
						weight="bold"
					>
						Ransomware
					</Text>
					<Text
						h1
						size={60}
						css={{
							textGradient: '45deg, $purple500 -20%, $pink500 100%',
						}}
						weight="bold"
					>
						Groups
					</Text>
					<Text
						h1
						size={60}
						css={{
							textGradient: '45deg, $yellow500 -20%, $red500 100%',
							textTransform: 'capitalize',
						}}
						weight="bold"
					>
						List
					</Text>
				</Card>
			</Grid>
			<Grid xs={12}>
				<Card css={{ mt: 20 }}>
					<TableComponent />
				</Card>
			</Grid>
			<Grid xs={12}>
				<Card css={{ px: '$4', mt: 20, mb: 10 }}>
					<Text css={{ px: '$5' }}>
						Made with ❤️ be careful while exploring Web
					</Text>
					<Text css={{ px: '$5' }}>This app is still in development mode</Text>
					<Card.Footer>
						<Link
							color="primary"
							target="_blank"
							href="https://github.com/milksense/ransomware"
						>
							Visit source code on GitHub
						</Link>
					</Card.Footer>
				</Card>
			</Grid>
		</Container>
	)
}

export default IndexPage

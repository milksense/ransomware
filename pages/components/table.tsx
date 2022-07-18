import { FC, useState, useEffect } from 'react'
import { Table, Row, Col, User, Text, Card, Loading } from '@nextui-org/react'
import { StyledBadge } from './StyledBadge'
import { IconButton } from './IconButton'
import { EyeIcon } from './EyeIcon'
import { GroupType } from '../../types'

const columns: {
	name: string
	uid: string
}[] = [
	{ name: 'NAME', uid: 'name' },
	{ name: 'ONION VERSION', uid: 'onionVersion' },
	{ name: 'STATUS', uid: 'status' },
	{ name: 'ACTIONS', uid: 'actions' },
]

const TableComponent: FC = () => {
	const [groups, setGroups] = useState<GroupType | null>(null)

	useEffect(() => {
		const fetchAPI = async () => {
			const groups = await fetch('/api/groups')
				.then((response) => response.json())
				.then((data) => setGroups(data ?? null))
		}

		fetchAPI()
	}, [])

	const renderCell = (group: GroupType, columnKey: React.Key) => {
		const cellValue = group[columnKey]
		switch (columnKey) {
			case 'name':
				return (
					<User
						// squared
						bordered
						zoomed
						// size={'lg'}
						color={
							group?.avatar
								? group?.status === 'active'
									? 'success'
									: group?.status === 'paused'
									? 'error'
									: group?.status === 'vacation'
									? 'warning'
									: group?.status === 'unknown'
									? 'default'
									: 'gradient'
								: 'default'
						}
						src={group?.avatar}
						name={cellValue}
						css={{ p: 0 }}
					>
						{group?.description}
					</User>
				)
			case 'onionVersion':
				return (
					<Col>
						<Row>
							<Text b size={14} css={{ tt: 'capitalize' }}>
								{cellValue}
							</Text>
						</Row>
						<Row>
							<Text b size={13} css={{ tt: 'capitalize', color: '$accents7' }}>
								{cellValue === 'v3' ? 'Current' : 'deprecated'}
							</Text>
						</Row>
					</Col>
				)
			case 'status':
				return <StyledBadge type={group?.status}>{cellValue}</StyledBadge>

			case 'actions':
				return (
					<Row justify="center" align="center">
						<Col css={{ d: 'flex' }}>
							<IconButton onClick={() => window.open(group?.uri, '_blank')}>
								<EyeIcon size={20} fill="#979797" />
							</IconButton>
						</Col>
					</Row>
				)
			default:
				return cellValue
		}
	}

	return !groups ? (
		<Loading css={{ mt: 20, mb: 20 }} />
	) : (
		<Table
			aria-label="Ransomware Groups tracker"
			css={{
				height: 'auto',
				minWidth: '100%',
			}}
			selectionMode="none"
		>
			<Table.Header columns={columns}>
				{(column) => (
					<Table.Column
						key={column.uid}
						hideHeader={column.uid === 'actions'}
						align={column.uid === 'actions' ? 'center' : 'start'}
					>
						{column.name}
					</Table.Column>
				)}
			</Table.Header>
			{/* @ts-expect-error */}
			<Table.Body items={groups}>
				{(item: GroupType) => (
					<Table.Row>
						{(columnKey) => (
							<Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
						)}
					</Table.Row>
				)}
			</Table.Body>
		</Table>
	)
}

export default TableComponent

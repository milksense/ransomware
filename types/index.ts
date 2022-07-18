export type GroupType = {
	id: string | number
	name?: string
	description?: string
	onionVersion: string
	status: 'active' | 'paused' | 'vacation' | 'unknown'
	avatar?: string
	uri?: string
}

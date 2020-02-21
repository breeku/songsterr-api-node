export interface InewTuning {
	name: string
	notes: string
	octaves: string
}

interface Inames {
	[key: string]: string
}

export interface Iindexes {
	[key: number]: Inames
}

interface Itracks {
	difficulty?: string
	difficultyV3?: string
	difficultyVersion?: number
	instrumentId: number
	tuning?: unknown // later cast as number[] or InewTuning
	views?: number
}

interface IsongsterrObject {
	artist: string
	artistId: number
	defaultTrack: number
	songId: number
	title: string
	tracks: Itracks[]
}

export type IsongsterrTabs = IsongsterrObject[]

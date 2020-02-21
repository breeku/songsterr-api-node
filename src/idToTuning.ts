import { pitch, names } from "./tunings"
import { InewTuning } from "./interfaces"

const idToString = (tuning: number[], octaves: boolean): string[] => {
	return tuning.map((tuning: number) => {
		const notes = Math.floor(tuning / 12) - 1
		return pitch[tuning % 12] + (octaves ? notes : "")
	})
}

export function idToTuning(tuning: number[]): InewTuning {
	const octaves: string = idToString(tuning, true)
			.reverse()
			.join(" "),
		notes: string = idToString(tuning, false)
			.reverse()
			.map((tuning: string, octaves: number) =>
				octaves === tuning.length - 1 ? tuning.toLowerCase() : tuning
			)
			.join(" ")

	let name = ""

	if (tuning.length in names && octaves in names[tuning.length])
		name = names[tuning.length][octaves]

	return {
		octaves,
		notes,
		name
	}
}

import fetch from "node-fetch"
import { idToTuning } from "./idToTuning"
import { IsongsterrTabs, InewTuning } from "./interfaces"
const BASEURL = "https://www.songsterr.com/api/"

/**
 * @param {string} string - A string to search for.
 * @return {Object} - Object that includes all result's
 */
export const songsterrSearch = async (
	string: string
): Promise<IsongsterrTabs> => {
	try {
		const response = await (
			await fetch(BASEURL + "songs?pattern=" + string + "&size=200")
		).json()

		const Tabs: IsongsterrTabs = response

		for (const songs of Tabs) {
			for (const tracks of songs.tracks) {
				if (tracks.tuning)
					(tracks.tuning as InewTuning) = idToTuning(
						tracks.tuning as number[]
					)
			}
		}

		return Tabs
	} catch (err) {
		if (err) {
			return err
		}
		throw err
	}
}

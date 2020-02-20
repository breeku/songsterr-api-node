import fetch from "node-fetch"
import { idToTuning } from "./idToTuning"

/**
 * @param {string} string - A string to search for.
 * @return {Object} - Object that includes all result's
 */
export const songsterrSearch = async (string: string) => {
    try {
        const response = await (
            await fetch(
                "https://www.songsterr.com/api/songs?pattern=" +
                    string +
                    "&size=200"
            )
        ).json()
        const Tabs: Array<any> = response
        for (const songs of Tabs) {
            for (const tracks of songs.tracks) {
                if (tracks.tuning) tracks.tuning = idToTuning(tracks.tuning)
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

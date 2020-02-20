import axios from "axios"
import { idToTuning } from "./idToTuning"

const api = axios.create({
    baseURL: "https://www.songsterr.com/api/",
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    }
})

/**
 * @param {string} string - A string to search for.
 * @return {Object} - Object that includes all result's
 */
export const songsterrSearch = async (string: string) => {
    try {
        const response = await api.get("/songs?pattern=" + string + "&size=200")
        const Tabs: Array<any> = response.data
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

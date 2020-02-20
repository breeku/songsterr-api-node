import { pitch, names } from "./tunings"

const idToString = (tuning: Array<number>, octave: boolean) => {
    return tuning.map((tuning: number) => {
        const note = Math.floor(tuning / 12) - 1
        return pitch[tuning % 12] + (octave ? note : "")
    })
}

export function idToTuning(tuning: Array<number>) {
    const octave: string = idToString(tuning, true)
            .reverse()
            .join(" "),
        note: string = idToString(tuning, false)
            .reverse()
            .map((tuning: string, octave: number) =>
                octave === tuning.length - 1 ? tuning.toLowerCase() : tuning
            )
            .join(" ")

    let name: string = ""

    if (tuning.length in names && octave in names[tuning.length])
        name = names[tuning.length][octave]

    return {
        octave,
        note,
        name
    }
}

import { idToTuning } from "../src/idToTuning"

const exampleTuning = [64, 59, 55, 50, 45, 40]

it("id array transforms to tuning object", () => {
	expect.assertions(1)
	const result = idToTuning(exampleTuning)
	expect(result).toEqual({
		octaves: "E2 A2 D3 G3 B3 E4",
		notes: "e A D G B E",
		name: "Standard tuning"
	})
})

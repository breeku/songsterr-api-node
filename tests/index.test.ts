import { songsterrSearch } from "../src/index"

it("returns array of objects", async () => {
	expect.assertions(1)
	const result = await songsterrSearch("Dyers eve")
	expect(result).toBeDefined()
})

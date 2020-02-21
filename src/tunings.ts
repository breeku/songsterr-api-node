import { Iindexes } from "./interfaces"

export const pitch: string[] = [
		"C",
		"C#",
		"D",
		"D#",
		"E",
		"F",
		"F#",
		"G",
		"G#",
		"A",
		"A#",
		"B"
	],
	names: Iindexes = {
		4: {
			"E1 A1 D2 G2": "Standard 4-string bass",
			"D#1 G#1 C#2 F#3": "Down 1/2 step",
			"D1 G1 C2 F2": "Down 1 step",
			"C1 F1 A#1 D#2": "Down 2 step",
			"D1 A1 D2 G2": "Drop D"
		},
		5: {
			"B0 E1 A1 D2 G2": "Standard 5-string bass"
		},
		6: {
			"E2 A2 D3 G3 B3 E4": "Standard tuning",
			"D2 A2 D3 G3 A3 D4": "DADGAD Dsus4",
			"D2 A2 D3 G3 B3 D4": "Double drop D",
			"D2 A2 D3 G3 B3 E4": "Drop D",
			"E2 A2 E3 A3 C#3 E4": "Open A major",
			"C2 G2 C3 G3 C3 E4": "Open C major",
			"D2 A2 D3 F#3 A3 D4": "Open D major",
			"E2 B2 E3 G#3 B3 E4": "Open E major",
			"E2 B2 E3 G3 B3 E4": "Open E minor",
			"D2 G2 D3 G3 B3 D4": "Open G major",
			"D2 G2 D3 G3 A#3 D4": "Open G minor",
			"E3 A3 D4 G4 B3 E5": "Nashville guitar",
			"B0 E1 A1 D2 G2 C3": "Standard 6-string bass"
		},
		7: {
			"B1 E2 A2 D3 G3 B3 E4": "Standard 7-string",
			"A1 E2 A2 D3 G3 B3 E4": "Drop A 7-string",
			"A1 D2 A2 D3 G3 B3 E4": "Drop D + A 7-string"
		}
	}

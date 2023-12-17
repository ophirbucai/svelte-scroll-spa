export function contrastColor(color: string): "#000000" | "#ffffff" {
	const [r, g, b] = color
		.slice(4, -1)
		.split(",")
		.map((x) => parseInt(x));

	const yiq = (r * 299 + g * 587 + b * 114) / 1000;

	return yiq >= 128 ? "#000000" : "#ffffff";
}


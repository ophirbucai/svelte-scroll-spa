export function contrastColor(color: string): `rgb(${number},${number},${number})` {
	const [r, g, b] = color
		.slice(4, -1)
		.split(",")
		.map((x) => parseInt(x));

	const yiq = (r * 299 + g * 587 + b * 114) / 1000;

	return yiq >= 128 ? "rgb(0,0,0)" : "rgb(255,255,255)";
}


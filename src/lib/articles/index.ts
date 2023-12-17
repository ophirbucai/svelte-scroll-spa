import { contrastColor } from "../utils/contrastColor";

export const articles = [
	{
		id: 'item1',
		name: 'Pineapple',
		headline: 'The best fruit in the world!',
		description: "Description of the item",
		text1: 'Order Now',
		text2: 'Learn More',
		link1: 'https://github.com/ophirbucai',
		link2: 'https://github.com/ophirbucai',
		color: 'rgb(242, 244, 27)',
		textColor: '',
		invertedTextColor: '',
		attributes: [
			{ type: "taste", name: "Sweet" },
			{ type: "taste", name: "A Bit Sour" }
		]
	},
	{
		id: 'item2',
		name: 'Dragon Fruit',
		headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		description: "Not sure what to buy? Let us pick for you.",
		text1: 'Order Now',
		text2: 'Check Stock',
		link1: 'https://github.com/ophirbucai',
		link2: 'https://github.com/ophirbucai',
		color: 'rgb(242, 84, 217)',
		textColor: '',
		invertedTextColor: '',
		attributes: [
			{ type: "taste", name: "Sweet" }
		]
	},
	{
		id: 'item3',
		name: 'Blueberry',
		headline: 'The most exotic fruit in the forest.',
		description: "Don't know what to buy? Let us do the work",
		text1: 'Order Now',
		text2: 'Check Stock',
		link1: 'https://github.com/ophirbucai',
		link2: 'https://github.com/ophirbucai',
		color: 'rgb(42, 84, 217)',
		textColor: '',
		invertedTextColor: '',
		attributes: [
			{ type: "taste", name: "Sweet" }
		]
	},
	{
		id: 'item4',
		name: 'Plum',
		headline: 'It ain\'t Shavuot yet, but it\'s always time for plum.',
		description: "Don't know what to buy? Let us do the work",
		text1: 'Order Now',
		text2: 'Check Stock',
		link1: 'https://github.com/ophirbucai',
		link2: 'https://github.com/ophirbucai',
		color: 'rgb(42, 84, 117)',
		textColor: '',
		invertedTextColor: '',
		attributes: [
			{ type: "taste", name: "Sweet" },
			{ type: "taste", name: "Tart" }
		]
	},
	{
		id: 'item5',
		name: 'Grape (Green)',
		headline: 'One sugar to sweeten them all',
		description: "Some other description",
		text1: 'Order Now',
		text2: 'Learn More',
		link1: 'https://github.com/ophirbucai',
		link2: 'https://github.com/ophirbucai',
		color: 'rgb(42, 184, 117)',
		textColor: '',
		invertedTextColor: '',
		attributes: [
			{ type: "taste", name: "Sweet" }
		]
	},
	{
		id: 'item6',
		name: 'Grape (Purple)',
		headline: 'A rendition on the favorite grape',
		description: "Some other description",
		text1: 'Order Now',
		text2: 'Learn More',
		link1: 'https://github.com/ophirbucai',
		link2: 'https://github.com/ophirbucai',
		color: 'rgb(142, 84, 117)',
		textColor: '',
		invertedTextColor: '',
		attributes: [
			{ type: "taste", name: "Sweet" },
			{ type: "taste", name: "Sour" }
		]
	},
	{
		id: 'item7',
		name: 'Cherry',
		headline: 'Yummy cherries always come in pairs',
		description: "Some other description",
		text1: 'Shop Now',
		text2: '',
		link1: 'https://github.com/ophirbucai',
		link2: '',
		color: 'rgb(42, 14, 17)',
		textColor: '',
		invertedTextColor: '',
		attributes: [
			{ type: "taste", name: "Sweet" },
		]
	},
].map((item) => {
	item.textColor = contrastColor(item.color);
	item.invertedTextColor = contrastColor(item.textColor);
	return item;
})

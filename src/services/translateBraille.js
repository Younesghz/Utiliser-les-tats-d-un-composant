const alphabets = {
	a: "⠁",
	b: "⠃",
	c: "⠉",
	d: "⠙",
	e: "⠑",
	f: "⠋",
	g: "⠛",
	h: "⠓",
	i: "⠊",
	j: "⠚",
	k: "⠅",
	l: "⠇",
	m: "⠍",
	n: "⠝",
	o: "⠕",
	p: "⠏",
	q: "⠟",
	r: "⠗",
	s: "⠎",
	t: "⠞",
	u: "⠥",
	v: "⠧",
	w: "⠺",
	x: "⠭",
	y: "⠽",
	z: "⠵",
	" ": "⠶",
	0: "⠚",
	1: "⠁",
	2: "⠃",
	3: "⠉",
	4: "⠙",
	5: "⠑",
	6: "⠋",
	7: "⠛",
	8: "⠓",
	9: "⠊",
};

export const translateBraille = (textSaisir) => {
	let result = "";
	textSaisir
		.split("")
		.map((letter) => { result += alphabets[letter];})
		.join();
	return result;
}
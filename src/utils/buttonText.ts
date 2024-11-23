const texts = [
    { text: "READ MORE", id: 1 },
    { text: "EXPLORE", id: 2 },
    { text: "START READING", id: 3 },
    { text: "KNOW MORE", id: 4 }
];

export function buttonText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex].text;
}

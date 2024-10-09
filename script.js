
const quotes = [
    "A, as its first of letters, every speech maintains; The 'Primal Deity' is first through all the world's domains.",
    "No fruit have men of all their studied lore, Save they the 'Purely Wise One's' feet adore.",
    "If clouds, that promised rain, deceive, and in the sky remain, Famine, sore torment, stalks o'er earth's vast ocean-girdled plain."
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

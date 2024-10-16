const quotes = [
    { text: "A, as its first of letters, every speech maintains; The 'Primal Deity' is first through all the world's domains.", meaning: "As the letter A is the first of all letters, so the eternal God is first in the world." },
    { text: "No fruit have men of all their studied lore, Save they the 'Purely Wise One's' feet adore.", meaning: "What Profit have those derived from learning, who worship not the good feet of Him who is possessed of pure knowledge?" },
    { text: "Pleasant words are words with all-pervading love that burn; Words from his guileless mouth who can the very truth discern.", meaning: "Sweet words are those that are imbued with love and spoken truthfully by virtuous individuals." },
    { text: "A pleasant word with a beaming smile's preferred, Even to gifts with a liberal heart conferred.", meaning: "Sweet speech with a cheerful expression is more valuable than a generous gift." },
    { text: "Truth is the speaking of such words as are free from the least degree of evil.", meaning: "The essence of truth lies in speaking words that do no harm." },
    { text: "If clouds, that promised rain, deceive, and in the sky remain, Famine, sore torment, stalks o'er earth's vast ocean-girdled plain.", meaning: "When the expected rain does not fall, famine and suffering spread across the world." },
    { text: "To digest what has been eaten is more delightful than to eat more; likewise love is more delightful in dislike than in intercourse.", meaning: "Just as digesting food is more satisfying than just eating, love finds its true sweetness in reconciliation after a quarrel." },
    { text: "The world its course maintains through life that rain unfailing gives; Thus rain is known the true ambrosial food of all that lives.", meaning: "By the continuance of rain the world is preserved in existence; it is therefore worthy to be called ambrosia." },
    { text: "The men who nought deny, but know what's due, before their face To stand as suppliants affords especial grace.", meaning: "There is even a beauty in standing before and begging of those who are liberal in their gifts and understand their duty to beggars." }
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote.text;
    document.getElementById('meaning').textContent = quote.meaning;
}

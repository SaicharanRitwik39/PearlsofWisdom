const quotes = [
    { text: "A, as its first of letters, every speech maintains; The 'Primal Deity' is first through all the world's domains.", meaning: "As the letter A is the first of all letters, so the eternal God is first in the world." },
    { text: "No fruit have men of all their studied lore, Save they the 'Purely Wise One's' feet adore.", meaning: "What Profit have those derived from learning, who worship not the good feet of Him who is possessed of pure knowledge?" },
    { text: "Pleasant words are words with all-pervading love that burn; Words from his guileless mouth who can the very truth discern.", meaning: "Sweet words are those that are imbued with love and spoken truthfully by virtuous individuals." },
    { text: "A pleasant word with a beaming smile's preferred, Even to gifts with a liberal heart conferred.", meaning: "Sweet speech with a cheerful expression is more valuable than a generous gift." },
    { text: "Truth is the speaking of such words as are free from the least degree of evil.", meaning: "The essence of truth lies in speaking words that do no harm." },
    { text: "If clouds, that promised rain, deceive, and in the sky remain, Famine, sore torment, stalks o'er earth's vast ocean-girdled plain.", meaning: "When the expected rain does not fall, famine and suffering spread across the world." },
    { text: "To digest what has been eaten is more delightful than to eat more; likewise love is more delightful in dislike than in intercourse.", meaning: "Just as digesting food is more satisfying than just eating, love finds its true sweetness in reconciliation after a quarrel." },
    { text: "The world its course maintains through life that rain unfailing gives; Thus rain is known the true ambrosial food of all that lives.", meaning: "By the continuance of rain the world is preserved in existence; it is therefore worthy to be called ambrosia." },
    { text: "The men who nought deny, but know what's due, before their face To stand as suppliants affords especial grace.", meaning: "There is even a beauty in standing before and begging of those who are liberal in their gifts and understand their duty to beggars." },

    // Glory of God.
    { text: "\'A\' is the beginning of all alphabets, God is the origin of the universe", meaning: "\'A\' is the first of all letters. Likewise, God is the beginning of all the worlds."},
    { text: "Of what use is learning if it fails to lead To the holy feet of all-knowing God?", meaning: "Learning is of no use if the learner does not submit himself to God."},
    { text: "Who clasp the feet of God in flowery mind Live long in this earthly abode.", meaning: "Those who submit themselves to the sacred feet of God live long in this world."},
    { text: "No misery falls on those who hold The feet of the unbiased God.", meaning: "No sufferings come to those who hold the feet of God, who is above likes and dislikes."},
    { text: "Twin deeds of dark illusion, good and bad, Won't be theirs who glorify God.", meaning: "Those who praise the glory of God have no confusion about right and wrong deeds."},
    { text: "They live long who follow virtuous ways of God, who has curbed five senses.", meaning: "They who follow the virtuous ways of God, who has curbed the five senses, live long in happiness."},
    { text: "It is extremely hard for others to dispel distress Except to those at the feet of the Peerless.", meaning: "Only those who reach the feet of God, who has no equal, can be free from sorrows."},
    { text: "If men reach not the feet of the Oceanic Virtue It's hard to swim the sea of sin and woe.", meaning: "Those who do not seek the feet of God cannot overcome the evils and sufferings of life."},
    { text: "Who bows not at the feet of eight-virtued God Has his head in vain like senses palsied.", meaning: "The head that does not worship the feet of God, who has eight virtues, is useless."},
    { text: "Vast sea of births can be crossed By those who clasp God\'s feet.", meaning: "Only those who surrender to the feet of God can overcome the sufferings of births."},

    //Excellence of Rain.
    { text: "As the unfailing rain sustains the world It is deemed a divine food.", meaning: "As the unfailing rain supports the world, it is considered a heavenly food."},
    { text: "Rain produces food for all beings in the world And rain itself serves as food indeed.", meaning: "Rain produces food for all living beings and the rain itself forms part of their food."},
    { text: "The vast ocean-bound earth suffers From famine if the sky fails.", meaning: "If it fails to rain, the world surrounded by the vast oceans will be in hunger and distress."},
    { text: "Tillers won\'t plough and toil If the rain is not genial.", meaning: "If there is no sufficient rain, the farmers will not plough the land."},
    { text: "It is rain that ruins and again it is rain That lifts the ruined to gain.", meaning: "It is the rain that ruins people. It is also the rain that lifts the ruined people."},
    { text: "Not a blade of grass will be seen If the sky showers no rain.", meaning: "There will not be any vegetation on this earth if there is no rain."},
    { text: "Even the boundless sea will shrink in nature If the rainy clouds fail to shower.", meaning: "Even the vast ocean on this earth will shrink in its nature if there is no rain."},
    { text: "If the sky dries up, rites and festivals Won\'t be there even for gods.", meaning: "When it fails to rain, there will be no festivals and rituals even to gods."},
    { text: "Charity and penance will disappear If the sky above fails to deliver.", meaning: "There will be neither generosity nor penance in the world, if it fails to rain."},
    { text: "Without water life cannot sustain Nor can virtue without rain.", meaning: "Life cannot exist without water in this world. Similarly, virtue cannot exist without rain."}

    //Greatness of Ascetics.
    { text: "Scriptures praise the excellence of ascetics Abiding by all in moral books.", meaning: "Greatness of virtuous men who have renounced the world is held in high esteem in moral books."},
    { text: "Measuring the greatness of ascetics Is like counting the dead ones.", meaning: "Greatness of ascetics is immeasurable. Measuring it is as impossible as counting the dead."},
    { text: "Who discern both and renounce the world alone In this world brightly shine.", meaning: "Those who analyse both good and bad and give up worldly life alone are great."}
    
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote.text;
    document.getElementById('meaning').textContent = quote.meaning;
}

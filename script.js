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

    //1. Glory of God.
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

    //2. Excellence of Rain.
    { text: "As the unfailing rain sustains the world It is deemed a divine food.", meaning: "As the unfailing rain supports the world, it is considered a heavenly food."},
    { text: "Rain produces food for all beings in the world And rain itself serves as food indeed.", meaning: "Rain produces food for all living beings and the rain itself forms part of their food."},
    { text: "The vast ocean-bound earth suffers From famine if the sky fails.", meaning: "If it fails to rain, the world surrounded by the vast oceans will be in hunger and distress."},
    { text: "Tillers won\'t plough and toil If the rain is not genial.", meaning: "If there is no sufficient rain, the farmers will not plough the land."},
    { text: "It is rain that ruins and again it is rain That lifts the ruined to gain.", meaning: "It is the rain that ruins people. It is also the rain that lifts the ruined people."},
    { text: "Not a blade of grass will be seen If the sky showers no rain.", meaning: "There will not be any vegetation on this earth if there is no rain."},
    { text: "Even the boundless sea will shrink in nature If the rainy clouds fail to shower.", meaning: "Even the vast ocean on this earth will shrink in its nature if there is no rain."},
    { text: "If the sky dries up, rites and festivals Won\'t be there even for gods.", meaning: "When it fails to rain, there will be no festivals and rituals even to gods."},
    { text: "Charity and penance will disappear If the sky above fails to deliver.", meaning: "There will be neither generosity nor penance in the world, if it fails to rain."},
    { text: "Without water life cannot sustain Nor can virtue without rain.", meaning: "Life cannot exist without water in this world. Similarly, virtue cannot exist without rain."},

    //3. Greatness of Ascetics.
    { text: "Scriptures praise the excellence of ascetics Abiding by all in moral books.", meaning: "Greatness of virtuous men who have renounced the world is held in high esteem in moral books."},
    { text: "Measuring the greatness of ascetics Is like counting the dead ones.", meaning: "Greatness of ascetics is immeasurable. Measuring it is as impossible as counting the dead."},
    { text: "Who discern both and renounce the world alone In this world brightly shine.", meaning: "Those who analyse both good and bad and give up worldly life alone are great."},
    { text: "Who by wisdom controls five senses Is a seed of heavenly joys.", meaning: "He who controls all his five senses by wisdom is a seed of heavenly bliss."},
    { text: "To a man who has curbed his five senses Indra is a witness to his powers.", meaning: "Indra, the celestial king, is a witness to the might of a man who has conquered his five senses."},
    { text: "The great ever perform rarer deeds The mean can\'t do such deeds.", meaning: "The great do extraordinary things but the petty-minded can never do such things."},
    { text: "The world belongs to those who quell Taste, sight, touch, sound and smell.", meaning: "Those who have complete control over their five senses gain the whole world."},
    { text: "The glory of the learned is amply revealed In the scriptures of their land indeed.", meaning: "Greatness of the learned men is shown in the scriptures of the world."},
    { text: "The ire of those on the mount of good Tho\' brief, can never be endured.", meaning: "One cannot endure the anger of good men though it is momentary."},
    { text: "The priests are the virtuous ones Who show mercy to all beings.", meaning: "The holy people are the virtuous who show compassion to one and all."},

    //4. Insistence on Virtue.
    { text: "Fame and wealth are bestowed by virtue What better gain can there be for you?", meaning: "Virtue gives fame and prosperity. There is no greater gain than this."},
    { text: "Nothing is greater than virtue to one\'s soul Forgetting the same is the worst evil.", meaning: "There is no greater gain than virtue. Forgetting the same brings ruin."},
    { text: "Always practise virtue in all possible ways And at all possible places.", meaning: "One should always perform righteous deeds in all possible ways and at all possible places."},
    { text: "In spotless mind alone virtue is found Not in the pomp and idle sound.", meaning: "Virtue is found only in the spotless mind but not in pomp and show."},
    { text: "Envy, greed, wrath and evil words - It\'s virtue to shun these ills.", meaning: "Avoiding the four evils such as envy, greed, anger and harsh words is a great virtue."},
    { text: "Always practice virtue; delay it not In death it\s a prop that fails not.", meaning: "One should not postpone doing good which is an indestructible support at the hour of death."},
    { text: "The palanquin-bearers and the rider surely Show the fruits of their virtue openly.", meaning: "The men bearing the palanquin and the man in it are reaping rewards of their past deeds."},
    { text: "The act of doing good deeds again and again Block rebirths like a stone.", meaning: "One\'s continuous good deeds serve as a stone blocking the chain of rebirths."},
    { text: "Real joy springs from virtue alone; all other joys Are painful and devoid of praise.", meaning: "Virtue alone gives real pleasure. Other pleasures are without fame."},
    { text: "The only thing to do is virtuous deeds The thing to avoid is vicious deeds.", meaning: "One must do only acts of virtue and always avoid doing evil deeds."},

    //5. Domestic Life.
    { text: "A man leading a domestic life is he Who supports the virtuous three.", meaning: "A good family man is one who supports his parents, wife and children."},
    { text: "To the ascetics, the poor and the desolate The family man is a support.", meaning: "The family man is a support to the ascetics, the needy and the deserted."},
    { text: "Ancestors, god, self, kindred and guests Are a family man\'s chief interests.", meaning: "Forefathers, god, himself, relatives and guest are the prime concerns of a family man."},
    { text: "Progeny of those who shun evil and share Their food ever prosper.", meaning: "If the family men avoid evils and share food with others, their descendants will ever prosper."},
    { text: "If domestic life has love and virtue There will be grace and gain true.", meaning: "There will be grace and gift if family life is rooted in love and virtue."},
    { text: "What does he gain by resorting to ascetic life When he leads a virtuous family life?", meaning: "When a person leads a domestic life, he need not aspire for ascetic life."},
    { text: "Who is virtuous in domestic life is the greatest Of all who strive for a superior state.", meaning: "One who leads a virtuous domestic life is the greatest among all trying for a superior state."},
    { text: "Guiding others leading a virtuous domestic life Is greater than the ascetic life.", meaning: "Leading a virtuous family life and guiding others is greater than the life of penance."},
    { text: "Domestic life is a virtue, especially If it is pursued blamelessly.", meaning: "Domestic life itself is a great virtue if it is really without any blame."},
    { text: "Who leads an ideal life on this earth Is a man of divine worth.", meaning: "One who leads an ideal domestic life is considered one among the gods in heaven."},

    //7. Worthy Children.
    { text: "Of all blessings we know nothing is greater Than begetting children wiser.", meaning: "There can be no better wealth than having good and intelligent children."},
    { text: "In all the seven births evil never touches one With noble and blameless children.", meaning: "In all the seven births, no evil will affect a person who has virtuous children."},
    { text: "Children are the real asset to the parents And they are the fruits of their acts.", meaning: "Children are parents\' real wealth. The worth of good children is the result of parents\' own deeds."},
    { text: "Food messed up by the hands of one\'s children Is far sweeter than nectar divine.", meaning: "Food messed up by the hands of one\'s children is sweeter than the divine nectar."},
    { text: "The touch of one'\s children thrills the body To ears their words are sweet melody.", meaning: "The touch of one's children and their sweet words delight their parents."},
    { text: "Who have not heard their babies\' babble Say flute and lute are delightful.", meaning: "Only those who have not heard the lisping of their children say that flute and lute are enchanting."},
    { text: "Father'\s responsibility to his son lies In placing him ahead of scholars.", meaning: "The duty of a father to his son is to make him gain the foremost place among the wise."},
    { text: "Children wiser than parents give pleasures To all the wordly beings.", meaning: "Children wiser than their parents give delight to all beings in the world."},
    { text: "Mother rejoices indeed at her son\'s birth But even more so on hearing his worth.", meaning: "Mother rejoices at the birth of her son; but even more so when he is praised as a noble man."},
    { text: "Son\'s duty to father is to make others wonder What penance got such a son to the father?", meaning: "The duty of a son is to conduct himself so well as to bring honour to his father."},

    //8. Possession of Love.
    { text: "Is there any bolt to shut the doors of love? Tears of the loved ones reveal the love.", meaning: "True love can never be hidden. It is revealed through the tears of the loved ones."},
    { text: "The loveless grab all for themselves The loving give even their bones.", meaning: "The loveless are selfish but the loving render their service even risking their life."},
    { text: "The association of the soul and the body Is the fruit of the life of love only.", meaning: "The relationship between the body and the soul is the result of benevolent life."},
    { text: "Love begets the life of love for others And amity of excellence it yields.", meaning: "From love always springs affection and that gives excellent friendship."},
    { text: "Joy on earth and bliss in heaven above Are the fruits of domestic life of love.", meaning: "Joy on earth and bliss in heaven are certainly the fruits of life of love."},
    { text: "\'Love helps only virtue\', say the unwise It also guards us from all evils. ", meaning: "The ignorant say that love helps virtue alone but it also guards us against all evils."},
    { text: "As the sun burns the boneless worms Virtue torments the loveless ones.", meaning: "As the sun burns the boneless worms, virtue tortures the loveless."},
    { text: "Life bereft of love is like a tree sapless Sprouting in utter barrenness.", meaning: "To prosper in life without love is as impossible as a dead tree sprouting in a barren desert."},
    { text: "Of what avail is the body\'s every outward part If there\'s no love within the heart.", meaning: "The external organs of one\'s body are of no use if one\'s heart is devoid of love."},
    { text: "The soul of life is only the love within humans Sans love man\'s body is but skin and bones.", meaning: "Love is the substance and soul of life. Without it, a man is a mere frame of bones covered with skin."}

    //9. Hospitality.
    { text: "Keeping home and guarding riches Is to help and entertain guests.", meaning: "The purpose of leading a domestic life and protecting wealth is to serve guests."},
    { text: "To keep out the guests is really bitter Even while eating divine nectar.", meaning: "It is undesirable to eat even divine nectar without sharing it with the guests."},
    { text: "One who daily entertains guests Never suffers from wants.", meaning: "The life of one who entertains guests everyday will never suffer from poverty."}
    
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote.text;
    document.getElementById('meaning').textContent = quote.meaning;
}

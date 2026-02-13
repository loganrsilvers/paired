function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

createStars();











// tarot cards made with claude
const tarotCards = {
    past: [
        {
            title: "The Fool",
            emoji: "0",
            meaning: "new relationship, fun light romance, carefree beginnings. met with open hearts and a sense of adventure."
        },
        {
            title: "The Magician",
            emoji: "I",
            meaning: "creating opportunities for love, being proactive in love, manifesting connection. inspired action to brought paths together."
        },
        {
            title: "The High Priestess",
            emoji: "II",
            meaning: "remain patient in love, calm exterior with inner passion, intimacy built on trust. a quiet knowing that this connection was meant to be."
        },
        {
            title: "The Empress",
            emoji: "III",
            meaning: "nurturing, supportive lover, sensual committed relationship."
        },
        {
            title: "The Emperor",
            emoji: "IV",
            meaning: "traditional relationship, use logic in love, unexpressed emotions. a strong foundation of respect and admiration formed your initial bond."
        },
        {
            title: "The Hierophant",
            emoji: "V",
            meaning: "safe, traditional partners, avoiding taboo, spiritual love. shared values and beliefs."
        },
        {
            title: "The Lovers",
            emoji: "VI",
            meaning: "balanced, loving, supportive relationship, choices about love"
        },
        {
            title: "The Chariot",
            emoji: "VII",
            meaning: "taking action on love, taking control of love life, determined pursuit of each other."
        },
        {
            title: "Strength",
            emoji: "VIII",
            meaning: "confidence drawing lovers, strong caring relationship, overcoming obstacles together."
        },
        {
            title: "The Hermit",
            emoji: "IX",
            meaning: "pause in love life to introspect, self-understanding in love, a period of reflection and growth prepared you both for this connection."
        },
        {
            title: "Wheel of Fortune",
            emoji: "X",
            meaning: "relationship changes, navigating change with partner, making adjustments in love."
        },
        {
            title: "Justice",
            emoji: "XI",
            meaning: "romantic efforts rewarded, compromise, treating partner fairly. a sense of fairness and balance."
        },
        {
            title: "The Hanged Man",
            emoji: "XII",
            meaning: "love can't be rushed, avoid romantic pressure, sacrifice for love. a willingness to see things from each other's perspective created a strong foundation for your relationship."
        },
        {
            title: "Death",
            emoji: "XIII",
            meaning: "changes in relationship, changes in romantic life, ending relationships. necessary endings."
        },
        {
            title: "Temperance",
            emoji: "XIV",
            meaning: "careful and considerate with love, being patient with love or lover, slow steady growth"
        },
        {
            title: "The Devil",
            emoji: "XV",
            meaning: "lust, hedonism, selfish disregard for lover's feelings, obsession with love. intense attraction and passion."
        },
        {
            title: "The Tower",
            emoji: "XVI",
            meaning: "breakup, weak relationships ending, foundational shift in view of love"
        },
        {
            title: "The Star",
            emoji: "XVII",
            meaning: "optimistic about love life, healing from past wounds, hopeful"
        },
        {
            title: "The Moon",
            emoji: "XVIII",
            meaning: "complicated romance, uncertainty about love or relationship, emotional ups and downs. mystery."
        },
        {
            title: "The Sun",
            emoji: "XIX",
            meaning: "happiness and love in relationship, positivity is attractive, feeling radiant. clarity and joy in your connection."
        },
        {
            title: "Judgement",
            emoji: "XX",
            meaning: "renewal of love, making adjustments in relationship, relationship awakening. purpose, self evaluation, reflection"
        }
    ],
    present: [
        {
            title: "The Fool",
            emoji: "0",
            meaning: "new relationship, fun light romance, carefree beginnings. open hearts and a sense of adventure."
        },
        {
            title: "The Magician",
            emoji: "I",
            meaning: "creating opportunities for love, being proactive in love, manifesting connection. inspired action."
        },
        {
            title: "The High Priestess",
            emoji: "II",
            meaning: "remain patient in love, calm exterior with inner passion, intimacy built on trust. a quiet knowing."
        },
        {
            title: "The Empress",
            emoji: "III",
            meaning: "nurturing, supportive lover, sensual committed relationship."
        },
        {
            title: "The Emperor",
            emoji: "IV",
            meaning: "traditional relationship, use logic in love, unexpressed emotions. a strong foundation of respect and admiration."
        },
        {
            title: "The Hierophant",
            emoji: "V",
            meaning: "safe, traditional partners, avoiding taboo, spiritual love. shared values and beliefs."
        },
        {
            title: "The Lovers",
            emoji: "VI",
            meaning: "balanced, loving, supportive relationship, choices about love"
        },
        {
            title: "The Chariot",
            emoji: "VII",
            meaning: "taking action on love, taking control of love life, determined pursuit of each other."
        },
        {
            title: "Strength",
            emoji: "VIII",
            meaning: "confidence drawing lovers, strong caring relationship, overcoming obstacles together."
        },
        {
            title: "The Hermit",
            emoji: "IX",
            meaning: "pause in love life to introspect, self-understanding in love, a period of reflection and growth."
        },
        {
            title: "Wheel of Fortune",
            emoji: "X",
            meaning: "relationship changes, navigating change with partner, making adjustments in love."
        },
        {
            title: "Justice",
            emoji: "XI",
            meaning: "romantic efforts rewarded, compromise, treating partner fairly. a sense of fairness and balance."
        },
        {
            title: "The Hanged Man",
            emoji: "XII",
            meaning: "love can't be rushed, avoid romantic pressure, sacrifice for love."
        },
        {
            title: "Death",
            emoji: "XIII",
            meaning: "changes in relationship, changes in romantic life, ending relationships. necessary endings."
        },
        {
            title: "Temperance",
            emoji: "XIV",
            meaning: "careful and considerate with love, being patient with love or lover, slow steady growth"
        },
        {
            title: "The Devil",
            emoji: "XV",
            meaning: "lust, hedonism, selfish disregard for lover's feelings, obsession with love. intense attraction and passion."
        },
        {
            title: "The Tower",
            emoji: "XVI",
            meaning: "breakup, weak relationships ending, foundational shift in view of love"
        },
        {
            title: "The Star",
            emoji: "XVII",
            meaning: "optimistic about love life, healing from past wounds, hopeful"
        },
        {
            title: "The Moon",
            emoji: "XVIII",
            meaning: "complicated romance, uncertainty about love or relationship, emotional ups and downs. mystery."
        },
        {
            title: "The Sun",
            emoji: "XIX",
            meaning: "happiness and love in relationship, positivity is attractive, feeling radiant. clarity and joy in your connection."
        },
        {
            title: "Judgement",
            emoji: "XX",
            meaning: "renewal of love, making adjustments in relationship, relationship awakening. purpose, self evaluation, reflection"
        }
    ],
    future: [
        {
            title: "The Fool",
            emoji: "0",
            meaning: "new relationship, fun light romance, carefree beginnings."
        },
        {
            title: "The Magician",
            emoji: "I",
            meaning: "creating opportunities for love, being proactive in love, manifesting connection. inspired action."
        },
        {
            title: "The High Priestess",
            emoji: "II",
            meaning: "remain patient in love, calm exterior with inner passion, intimacy built on trust. a quiet knowing."
        },
        {
            title: "The Empress",
            emoji: "III",
            meaning: "nurturing, supportive lover, sensual committed relationship."
        },
        {
            title: "The Emperor",
            emoji: "IV",
            meaning: "traditional relationship, use logic in love, unexpressed emotions. a strong foundation of respect and admiration."
        },
        {
            title: "The Hierophant",
            emoji: "V",
            meaning: "safe, traditional partners, avoiding taboo, spiritual love. shared values and beliefs."
        },
        {
            title: "The Lovers",
            emoji: "VI",
            meaning: "balanced, loving, supportive relationship, choices about love"
        },
        {
            title: "The Chariot",
            emoji: "VII",
            meaning: "taking action on love, taking control of love life, determined pursuit of each other."
        },
        {
            title: "Strength",
            emoji: "VIII",
            meaning: "confidence drawing lovers, strong caring relationship, overcoming obstacles together."
        },
        {
            title: "The Hermit",
            emoji: "IX",
            meaning: "pause in love life to introspect, self-understanding in love, a period of reflection and growth."
        },
        {
            title: "Wheel of Fortune",
            emoji: "X",
            meaning: "relationship changes, navigating change with partner, making adjustments in love."
        },
        {
            title: "Justice",
            emoji: "XI",
            meaning: "romantic efforts rewarded, compromise, treating partner fairly. a sense of fairness and balance."
        },
        {
            title: "The Hanged Man",
            emoji: "XII",
            meaning: "love can't be rushed, avoid romantic pressure, sacrifice for love."
        },
        {
            title: "Death",
            emoji: "XIII",
            meaning: "changes in relationship, changes in romantic life, ending relationships. necessary endings."
        },
        {
            title: "Temperance",
            emoji: "XIV",
            meaning: "careful and considerate with love, being patient with love or lover, slow steady growth"
        },
        {
            title: "The Devil",
            emoji: "XV",
            meaning: "lust, hedonism, selfish disregard for lover's feelings, obsession with love. intense attraction and passion."
        },
        {
            title: "The Tower",
            emoji: "XVI",
            meaning: "breakup, weak relationships ending, foundational shift in view of love"
        },
        {
            title: "The Star",
            emoji: "XVII",
            meaning: "optimistic about love life, healing from past wounds, hopeful"
        },
        {
            title: "The Moon",
            emoji: "XVIII",
            meaning: "complicated romance, uncertainty about love or relationship, emotional ups and downs. mystery."
        },
        {
            title: "The Sun",
            emoji: "XIX",
            meaning: "happiness and love in relationship, positivity is attractive, feeling radiant. clarity and joy in your connection."
        },
        {
            title: "Judgement",
            emoji: "XX",
            meaning: "renewal of love, making adjustments in relationship, relationship awakening. purpose, self evaluation, reflection"
        }
    ]
};








let selectedCards = {
    past: null,
    present: null,
    future: null
};

let flippedCards = {
    card1: false,
    card2: false,
    card3: false
};

let coupleName1 = "";
let coupleName2 = "";







function startReading() {
    coupleName1 = document.getElementById('name1').value.trim();
    coupleName2 = document.getElementById('name2').value.trim();
    
    if (coupleName1 === "" || coupleName2 === "") {
        alert("Names must be entered my love ...");
        return;
    }
    
    document.getElementById('inputSection').classList.add('hidden');
    document.getElementById('readingSection').classList.add('visible');
    
    displayCoupleNames();
    
    selectRandomCards();
    
    populateCards();
}

function displayCoupleNames() {
    const namesElement = document.getElementById('coupleNames');
    namesElement.innerHTML = `${coupleName1} <span class="heart">♥</span> ${coupleName2}`;
}
time
function selectRandomCards() {
    selectedCards.past = getRandomCard(tarotCards.past);
    selectedCards.present = getRandomCard(tarotCards.present);
    selectedCards.future = getRandomCard(tarotCards.future);
}

function getRandomCard(cardArray) {
    const randomIndex = Math.floor(Math.random() * cardArray.length);
    return cardArray[randomIndex];
}

function populateCards() {
    // Card 1 Past
    document.getElementById('card1-title').textContent = selectedCards.past.title;
    document.getElementById('card1-emoji').textContent = selectedCards.past.emoji;
    document.getElementById('card1-meaning').textContent = selectedCards.past.meaning;

    // Card 2 Present
    document.getElementById('card2-title').textContent = selectedCards.present.title;
    document.getElementById('card2-emoji').textContent = selectedCards.present.emoji;
    document.getElementById('card2-meaning').textContent = selectedCards.present.meaning;
    
    // Card 3 Future
    document.getElementById('card3-title').textContent = selectedCards.future.title;
    document.getElementById('card3-emoji').textContent = selectedCards.future.emoji;
    document.getElementById('card3-meaning').textContent = selectedCards.future.meaning;
}







// Called when user clicks on a card (from copilot)
function flipCard(cardNumber) {
    // Get the card element
    const card = document.getElementById(`card${cardNumber}`);
    
    // Check if already flipped (prevent re-flipping)
    if (flippedCards[`card${cardNumber}`]) {
        return; // Do nothing if already flipped
    }
    
    // Add the 'flipped' class to trigger CSS animation
    card.classList.add('flipped');
    
    // Mark this card as flipped
    flippedCards[`card${cardNumber}`] = true;
    
    // Check if all cards have been flipped
    checkIfAllFlipped();
}

function checkIfAllFlipped() {
    if (flippedCards.card1 && flippedCards.card2 && flippedCards.card3) {
        setTimeout(showFinalReading, 500); //500 ms
    }
}













function showFinalReading() {
    const verdict = generateVerdict();
    document.getElementById('verdict').textContent = verdict;
    document.getElementById('finalReading').style.display = 'block';
}
function generateVerdict() {
    const compatibilityScore = calculateCompatibility();
    const message = getCompatibilityMessage(compatibilityScore);
    return `${coupleName1} and ${coupleName2}, the cards have reveals a ${compatibilityScore}% alignment. ${message}`;
}




function calculateCompatibility() {
    const combined = coupleName1.toLowerCase() + coupleName2.toLowerCase();
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    }
    return 54 + (Math.abs(hash) % 35);
}

function getCompatibilityMessage(score) {
    if (score >= 90) {
        return "your souls are certainly intertwined in the most peculiar way.";
    } else if (score >= 80) {
        return "the universe celebrates your connection with cosmic convergence.";
    } else if (score >= 70) {
        return "a beautiful union of love and discovery awaits.";
    } else {
        return "very intriguing ... your unique energies have created something unexpected.";
    }
}











function resetReading() {
    document.getElementById('readingSection').classList.remove('visible');
    document.getElementById('inputSection').classList.remove('hidden');
    
    // clear
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    
    // reset
    document.getElementById('card1').classList.remove('flipped');
    document.getElementById('card2').classList.remove('flipped');
    document.getElementById('card3').classList.remove('flipped');
    
    flippedCards = {
        card1: false,
        card2: false,
        card3: false
    };
    selectedCards = {
        past: null,
        present: null,
        future: null
    };
    
    // hide
    document.getElementById('finalReading').style.display = 'none';
}







/*
function autoFlipCards() {
    setTimeout(() => flipCard(1), 500);   // Flip card 1 after 0.5s
    setTimeout(() => flipCard(2), 1500);  // Flip card 2 after 1.5s
    setTimeout(() => flipCard(3), 2500);  // Flip card 3 after 2.5s
}
*/
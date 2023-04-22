const cards = [];

function writeCards(cardFor, eventName) {
    for (let i = 0; i < cardFor.length; i ++) {
        const finishedCards = `Thank you, ${cardFor[i]}, for the wonderful ${eventName} gift!`;
        cards.push(finishedCards);
    }

    return cards;
};

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--);
    }
};
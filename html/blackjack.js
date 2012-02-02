/**
 * The CardSuit enum.
 */
var CardSuit = {
    CLOVERS:  { name: "Clovers",  symbol: "♣" },
    DIAMONDS: { name: "Diamonds", symbol: "♦" },
    HEARTS:   { name: "Hearts",   symbol: "♥" },
    SPADES:   { name: "Spades",   symbol: "♠" },
};
CardSuit.ALL_VALUES = [
            CardSuit.CLOVERS,
            CardSuit.DIAMONDS,
            CardSuit.HEARTS,
            CardSuit.SPADES
        ];

/**
 * The CardValue enum.
 */
var CardValue = {
    ACE:   { name: "Ace" },
    TWO:   { name: "Two" },
    THREE: { name: "Three" },
    FOUR:  { name: "Four" },
    FIVE:  { name: "Five" },
    SIX:   { name: "Six" },
    SEVEN: { name: "Seven" },
    EIGHT: { name: "Eight" },
    NINE:  { name: "Nine" },
    TEN:   { name: "Ten" },
    JACK:  { name: "Jack" },
    QUEEN: { name: "Queen" },
    KING:  { name: "King" },
};
CardValue.ALL_VALUES = [
            CardValue.ACE,
            CardValue.TWO,
            CardValue.THREE,
            CardValue.FOUR,
            CardValue.FIVE,
            CardValue.SIX,
            CardValue.SEVEN,
            CardValue.EIGHT,
            CardValue.NINE,
            CardValue.TEN,
            CardValue.JACK,
            CardValue.QUEEN,
            CardValue.KING
        ];

/**
 * The Card class represents a single playing card.
 */
function Card(suit, value) {
    this.suit = suit;
    this.value = value;
};

Card.prototype.toString = function toString() {
    return "{ suit: '"+this.suit+"', value: '"+this.value+"' }";
};

/**
 * The CardDeck class represents the set of all playing cards in a game.
 */
function CardDeck() {
    this.cards = [];
    for (var suitIndex = 0; suitIndex < CardSuit.ALL_VALUES.length; suitIndex++) {
        var suit = CardSuit.ALL_VALUES[suitIndex];
        for (var valueIndex = 0; valueIndex < CardValue.ALL_VALUES.length; valueIndex++) {
            var value = CardValue.ALL_VALUES[valueIndex];
            this.cards[this.cards.length] = new Card(suit, value);
        }
    }
};

/**
 * The CardHand class represents the cards that are being held by a player.
 * Feel free to fill in this class with what would be needed to implement the game.
 */
function CardHand() {
}

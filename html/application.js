/**
 * The BlackjackView class was orginally implemented to draw both the board and the card.
 * Feel free to refactor into separate board and card views.
 */
function BlackjackView(name, width, height) {
    this.element = document.createElement("canvas");
    this.element.id = name;
    this.element.width = width;
    this.element.height = height;
    this.element.style.cursor = "pointer";
    document.body.appendChild(this.element);
    this.ctx = this.element.getContext('2d');
};

BlackjackView.prototype.drawBoard = function () {
    this.ctx.fillStyle = 'rgba(0, 125, 10, 1)';
    this.ctx.fillRect(0, 0, this.element.width, this.element.height);
};

BlackjackView.prototype.drawCard = function (card) {
    this.ctx.translate(this.element.width/2,this.element.height/2);
    this.ctx.rotate(8 * Math.PI / 180);
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    this.ctx.shadowOffsetX = 5;
    this.ctx.shadowOffsetY = 5;
    this.ctx.shadowBlur    = 18;
    this.ctx.shadowColor   = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(-75, -112, 150, 224);
    this.ctx.restore();

    var suit = card.suit.symbol;
    var name = card.value.name.toUpperCase();
	
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(204, 0, 51, 1)';
    this.ctx.font = "bold 48pt serif";
    this.ctx.textAlign = "center";
    this.ctx.fillText(suit, 0, 20);
    this.ctx.font = "bold 12pt serif";
    this.ctx.textAlign = "left";
    this.ctx.fillText(name, -68, -92);
    this.ctx.textAlign = "right";
    this.ctx.fillText(name, 68, 104);
    this.ctx.restore();
};

/**
 * The BlackjackApplication class is the root object that holds direct or
 * indirect references to the models, views, and controllers.
 */
function BlackjackApplication() {};

BlackjackApplication.prototype.start = function () {
    this.deck = new CardDeck();
    var randomCardIndex = Math.floor(Math.random()*52);
    var card = this.deck.cards[randomCardIndex];

    this.boardView = new BlackjackView("board", 640, 480);
    this.boardView.drawBoard();
    this.boardView.drawCard(card);
};

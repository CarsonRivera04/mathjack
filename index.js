
class Card {
  constructor(rank, suit) {
    this.rank = rank; 
    this.suit = suit; 
  }
  cardCount() {
    switch(this.rank) {
      case 2: 
      case 3: 
      case 4: 
      case 5: 
      case 6: 
        return 1; 
        break; 
      case 7:
      case 8:
      case 9:
        return 0; 
        break; 
      case 10: 
      case 11: 
      case 12: 
      case 13: 
      case 1: 
        return -1; 
        break; 
    }
  }
}
// user should pick this number 
let numOfDecks = 2; 
const deck = []; 
for (let i = 0; i < 4; i++) {
  for (let j = 1; j <= 13; j++) {
    switch(i) {
      case 0: 
        deck.push(new Card(j, "hearts")); 
        break; 
      case 1: 
        deck.push(new Card(j, "clubs")); 
        break; 
      case 2: 
        deck.push(new Card(j, "diamonds")); 
        break; 
      case 3: 
        deck.push(new Card(j, "spades")); 
        break; 
    }
  }
}
const shuffle = require('fisher-yates');
console.log(shuffle(deck)); 

function myMove1(callback) {
  let id = null;
  const elem = document.getElementById("animate");   
  elem.style.display = "block"; 
  let xpos = 0, ypos = 0; 
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (xpos == 50 && ypos == -100) {
      clearInterval(id);
      elem.style.right = 0; 
      elem.style.bottom = 0; 
      document.getElementById("card1").style.visibility = "visible"; 
      if (callback) callback(); 
    } else {
      if (xpos < 50) xpos += 1; 
      if (ypos > -100) ypos -= 1; 
      elem.style.right = xpos + "%"; 
      elem.style.bottom = ypos + "%"; 
    }
  }
}

function myMove2(callback) {
  let id = null;
  const elem = document.getElementById("animate");   
  let xpos = 0, ypos = 0; 
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (xpos == 50 && ypos == 100) {
      clearInterval(id);
      elem.style.right = 0; 
      elem.style.bottom = 0; 
      document.getElementById("card2").style.visibility = "visible"; 
      if (callback) callback(); 
    } else {
      if (xpos < 50) xpos += 1; 
      if (ypos < 100) ypos += 1; 
      elem.style.right = xpos + "%"; 
      elem.style.bottom = ypos + "%"; 
    }
  }
}

function myMove3(callback) {
  let id = null;
  const elem = document.getElementById("animate");   
  let xpos = 0, ypos = 0; 
  clearInterval(id);
  id = setInterval(frame, 5);
  let temp = (window.innerWidth / 2) - 164;
  function frame() {
    if (xpos >= temp && ypos == -100) {
      clearInterval(id);
      elem.style.right = 0; 
      elem.style.bottom = 0; 
      document.getElementById("card3").style.visibility = "visible"; 
      if (callback) callback(); 
    } else {
      if (xpos < temp) xpos += 4; 
      if (ypos > -100) ypos -= 2; 
      elem.style.right = xpos + "px"; 
      elem.style.bottom = ypos + "%"; 
    }
  }
}

function myMove4(callback) {
  let id = null;
  const elem = document.getElementById("animate");   
  let xpos = 0, ypos = 0; 
  clearInterval(id);
  id = setInterval(frame, 5);
  let temp = (window.innerWidth / 2) - 164;
  function frame() {
    if (xpos >= temp && ypos == 100) {
      clearInterval(id);
      elem.style.right = 0; 
      elem.style.bottom = 0; 
      elem.style.display = "none"; 
      document.getElementById("card4").style.visibility = "visible"; 
      if (callback) callback(); 
    } else {
      if (xpos < temp) xpos += 4; 
      if (ypos < 100) ypos += 2; 
      elem.style.right = xpos + "px"; 
      elem.style.bottom = ypos + "%"; 
    }
  }
}

function myMove() {
  myMove1(() => {
    myMove2(() => {
      myMove3(() => {
        myMove4();
      });
    });
  });
}

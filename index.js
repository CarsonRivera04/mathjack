class Card {
  constructor(rank, suit) {
    this.rank = rank; 
    this.suit = suit; 
  }
}

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
Shuffle(deck); 

let hp = { key: 0 }; 
let hw = { key: 0 }; 

function Deal() {
  for (let i = 1; i <= 4; i++) {
    let str = "card" + i.toString(); 
    document.getElementById(str).style.visibility = "hidden"; 
  }
  myMove(); 
  document.getElementById("hit").style.display = "block"; 
  document.getElementById("stand").style.display = "block"; 
  document.getElementById("double").style.display = "block"; 
  document.getElementById("split").style.display = "block"; 
  
  document.getElementsByClassName("panel")[0].style.display = "none"; 
  document.getElementsByClassName("panel")[1].style.display = "none"; 

  for (let i = 1; i <= 3; i++) {
    const str = "card" + i.toString(); 
    const elem = document.getElementById(str);
    const card = deck.pop(); 
    const rank = card.rank; 
    switch(rank) {
      case 1: 
        elem.getElementsByClassName("rank")[0].innerHTML = 'A'; 
        elem.getElementsByClassName("rank")[1].innerHTML = 'A'; 
        break; 
      case 11: 
        elem.getElementsByClassName("rank")[0].innerHTML = 'J'; 
        elem.getElementsByClassName("rank")[1].innerHTML = 'J'; 
        break; 
      case 12: 
        elem.getElementsByClassName("rank")[0].innerHTML = 'Q'; 
        elem.getElementsByClassName("rank")[1].innerHTML = 'Q'; 
        break; 
      case 13: 
        elem.getElementsByClassName("rank")[0].innerHTML = 'K'; 
        elem.getElementsByClassName("rank")[1].innerHTML = 'K'; 
        break; 
      default: 
        elem.getElementsByClassName("rank")[0].innerHTML = rank; 
        elem.getElementsByClassName("rank")[1].innerHTML = rank; 
        break; 
    }
    const suit = "./icons/" + card.suit + ".png"; 
    elem.getElementsByClassName("suit")[0].src = suit; 
    elem.getElementsByClassName("suit")[1].src = suit; 
    elem.getElementsByClassName("suit-image")[0].src = suit; 
    if (card.suit == "spades" || card.suit == "clubs") {
      elem.getElementsByClassName("rank")[0].style.color = "black"
      elem.getElementsByClassName("rank")[1].style.color = "black"
    }
    else {
      elem.getElementsByClassName("rank")[0].style.color = "rgb(200, 42, 61)" 
      elem.getElementsByClassName("rank")[1].style.color = "rgb(200, 42, 61)" 
    }
  }
}

function PlayerChoice(choice, hp, hw) {
  let dcard = document.getElementById("card2").getElementsByTagName("p")[0].innerHTML;
  switch(dcard) {
    case 'A':
      dcard = 1; 
      break; 
    case 'J': 
    case 'Q': 
    case 'K': 
      dcard = 10; 
      break; 
    default: 
      dcard = Number(dcard);
  }
  let pcard1 = document.getElementById("card1").getElementsByTagName("p")[0].innerHTML;
  switch(pcard1) {
    case 'A':
      pcard1 = 1; 
      break; 
    case 'J': 
    case 'Q': 
    case 'K': 
      pcard1 = 10; 
      break; 
    default: 
      pcard1 = Number(pcard1);
  }
  let pcard2 = document.getElementById("card3").getElementsByTagName("p")[0].innerHTML;
  switch(pcard2) {
    case 'A':
      pcard2 = 1; 
      break; 
    case 'J': 
    case 'Q': 
    case 'K': 
      pcard2 = 10; 
      break; 
    default: 
      pcard2 = Number(pcard2);
  }
  document.getElementById("hit").style.display = "none"; 
  document.getElementById("stand").style.display = "none"; 
  document.getElementById("double").style.display = "none"; 
  document.getElementById("split").style.display = "none"; 
  const correct = CorrectMove(dcard, pcard1, pcard2); 
  document.getElementById("rightwrong").style.display = "block"; 
  const elem1 = document.getElementById("rightwrong");
  hp.key++; 
  if (correct == choice) {
    hw.key++; 
    elem1.innerHTML = "CORRECT, player was supposed to " + correct; 
    elem1.style.backgroundColor = "green"; 
  }
  else {
    elem1.innerHTML = "WRONG, player was supposed to " + correct; 
    elem1.style.backgroundColor = "red"; 
  }
  document.getElementById("stats").style.display = "block";
  document.getElementById("stats").innerHTML = "You have played " + hw.key + '/' + hp.key + " correctly!";
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
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

function CorrectMove(dcard, pcard1, pcard2) {
  if (dcard == 11 || dcard == 12 || dcard == 13) 
    dcard = 10; 
  if (pcard1 == 11 || pcard1 == 12 || pcard1 == 13) 
    pcard1 = 10; 
  if (pcard2 == 11 || pcard2 == 12 || pcard2 == 13) 
    pcard2 = 10; 

  // correct move for pairs 
  if (pcard1 == pcard2) {
    switch(pcard1) {
      case 1: 
      case 8: 
        return "split"; 
        break; 
      case 2: 
      case 3: 
        if (dcard >= 4 && dcard <= 7) 
          return "split"; 
        else 
          return "hit"; 
        break; 
      case 4:
        return "hit";
        break; 
      case 5: 
        if (dcard == 1 || dcard == 10)
          return "hit"; 
        else 
          return "double"; 
        break; 
      case 6: 
        if (dcard >= 3 && dcard <= 6)
          return "split";
        else 
          return "hit"; 
        break; 
      case 7: 
        if (dcard >= 2 && dcard <= 7)
          return "split";
        else 
          return "hit"; 
        break; 
      case 9: 
        if (dcard == 7 || dcard == 10 || dcard == 1) 
          return "stand"; 
        else 
          return "split"; 
        break; 
      case 10:
        return "stand"; 
        break; 
    }
  }
  else if (pcard1 == 1 || pcard2 == 1) {
    switch (pcard1 + pcard2) {
      case 3:
      case 4:
        if (dcard == 5 || dcard == 6) 
          return "double"; 
        else 
          return "hit"; 
        break; 
      case 5: 
      case 6: 
        if (dcard >= 4 && dcard <= 6) 
          return "double"; 
        else 
          return "hit"; 
        break; 
      case 7:
        if (dcard >= 3 && dcard <= 6) 
          return "double"; 
        else 
          return "hit"; 
        break; 
      case 8: 
        if (dcard == 7 || dcard == 8 || dcard == 2)
          return "stand"; 
        else if (dcard >= 3 && dcard <= 6)
          return "double"; 
        else 
          return "hit"; 
        break; 
      case 9:
      case 10:
      case 11:
        return "stand"; 
        break; 
    }
  }
  else {
    switch (pcard1 + pcard2) {
      case 5:
      case 6:
      case 7:
      case 8:
        return "hit"; 
        break; 
      case 9: 
        if (dcard >= 2 && dcard <= 6)
          return "double"; 
        else 
          return "hit"; 
        break;
      case 10: 
        if (dcard == 10 || dcard == 1)
          return "hit"; 
        else 
          return "double"; 
        break; 
      case 11:
        if (dcard == 1)
          return "hit";
        else 
          return "double"; 
        break; 
      case 12: 
        if (dcard >= 4 && dcard <= 6) 
          return "stand"; 
        else 
          return "hit"; 
        break; 
      case 13:
      case 14:
      case 15:
      case 16:
        if (dcard >= 2 && dcard <= 6) 
          return "stand"; 
        else 
          return "hit"; 
        break; 
      default: 
        return "stand"; 
        break; 
    }
  }
}

function Shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]];
  } 
} 

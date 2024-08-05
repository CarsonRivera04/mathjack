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

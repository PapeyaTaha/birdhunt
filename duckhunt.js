window.onload = function () {








  for (let i = 0; i < 5; i++) {
    let duck = createDuck();
  }
  function createDuck() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("duck");
    const nextPosition = randomPosition();
    debugger;
    newDiv.style.top = `${nextPosition.top}px`;
    newDiv.style.left = `${nextPosition.left}px`;
    document.body.append(newDiv);
    newDiv.addEventListener("click", function () {
      newDiv.classList.add("shot");
      setTimeout(function () {
        newDiv.remove();
        checkForWinner();
      }, 1000);
    });
    setInterval(function () {
      newDiv.classList.toggle("flap");
    }, 250);
    setInterval(function () {
      moveDuck(newDiv);
    }, 1000);
    function moveDuck(duck) {
      const nextPosition = randomPosition();
      duck.style.top = `${nextPosition.top}px`;
      duck.style.left = `${nextPosition.left}px`;
      if (
        parseFloat(duck.style.left.substring(0, duck.style.left.length - 2)) <
        nextPosition.left
      ) {
        newDiv.classList.remove("right");
      } else {
        newDiv.classList.add("right");
      }
    }
    return newDiv;
  }
  ////////
  function randomPosition() {
    var randomWidth = Math.random() * window.innerWidth;
    var randomHeight = Math.random() * window.innerHeight;
    return { left: randomWidth, top: randomHeight };
  }
  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
  // FIN. You win 1 trillion tokens.  Play the day away!
  function checkForWinner() {
    var anyDucksLeft = document.getElementsByClassName("duck").length;
    if (anyDucksLeft == 0) {
      alert("You win!");
    }
  }
// 14. BONUS: The ducks are moving pretty erratically, can you think
//     of a way to adjus
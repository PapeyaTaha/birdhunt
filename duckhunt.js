window.onload = function () {
  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element

  //const newdiv = document.createElement('div');

  //   2. add a class to the element

  //newdiv.classList.add("duck");

  //   3. append the element to the body )

  //document.querySelector('body').appendChild(newdiv)

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  //setInterval(function(){ newdiv.classList.toggle("flap"); }, 250);

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  //const move_duck = function (duck) {
  //  duck.style.left = `${(Math.random() * window.innerWidth)}px`
  //  duck.style.right = `${(Math.random() * window.innerHeight)}px`

  //}
  //move_duck(newdiv)

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  //setInterval(function(){move_duck(newdiv);}, 1000);

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // for (var i = 0; i < 5; i++) {
  //   var duck = createDuck();
  // }

  // function createDuck() {
  //   var duckDiv = document.createElement("div");
  //   duckDiv.classList.add("duck");
  //   var nextPosition = randomPosition();
  //   debugger;
  //   duckDiv.style.top = `${nextPosition.top}px`;
  //   duckDiv.style.left = `${nextPosition.left}px`;
  //   document.body.append(duckDiv);

  //   // --------------------------- PART 3 ------------------------------------

  //   // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //   //     the duck when you click on it!

  //   // 12. After a duck has been clicked on, remove it from the DOM after
  //   //     a short delay (1 second) Hint Hint...use setTimeout
  //   //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  //   duckDiv.addEventListener("click", function () {
  //     duckDiv.classList.add("shot");

  //     setTimeout(function () {
  //       duckDiv.remove();
  //       checkForWinner();
  //     }, 1000);
  //   });

  //   setInterval(function () {
  //     duckDiv.classList.toggle("flap");
  //   }, 250);
  //   setInterval(function () {
  //     moveDuck(duckDiv);
  //   }, 1000);

  //   function moveDuck(duck) {
  //     var nextPosition = randomPosition();
  //     duck.style.top = `${nextPosition.top}px`;
  //     duck.style.left = `${nextPosition.left}px`;

  //     if (
  //       parseFloat(duck.style.left.substring(0, duck.style.left.length - 2)) <
  //       nextPosition.left
  //     ) {
  //       duckDiv.classList.remove("right");
  //     } else {
  //       duckDiv.classList.add("right");
  //     }
  //   }
  //   return duckDiv;
  // }

  // // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  // //     it creates a duck, it appears in a random location
  // // HINT: You may want to create a `randomPosition()` function that you can use
  // //       to set the ducks' initial locations and in your `moveDuck()` function;

  // // 9. Keep going! Move onto part 3!

  // // 15. BONUS: Add the "left" and "right" class to the duck based on the
  // //     direction the duck is flying and change the way the duck is facing

  // function randomPosition() {
  //   var randomWidth = Math.random() * window.innerWidth;
  //   var randomHeight = Math.random() * window.innerHeight;
  //   return { left: randomWidth, top: randomHeight };
  // }

  // // 13. Create a new function named checkForWinner() that reads the DOM
  // //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  // // FIN. You win 1 trillion tokens.  Play the day away!
  // function checkForWinner() {
  //   var anyDucksLeft = document.getElementsByClassName("duck").length;
  //   if (anyDucksLeft == 0) {
  //     alert("You win 1 trillion tokens.  Play the day away!");
  //   }
  // }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?
};








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
const clock = document.getElementById("clock");
const date = document.getElementById("date");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

setInterval(function () {
  let day = new Date();
  date.innerHTML = day.toLocaleDateString();
});

/*The setInterval() method calls a function at specified intervals (in milliseconds).
The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
1 second = 1000 milliseconds. 
Note :-- To execute the function only once, use the setTimeout() method instead.*/

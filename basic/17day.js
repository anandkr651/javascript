function myfunction() {
  console.log("i was clicked");
}

// const mouseover =()=>{
//     console.log('mouse over');
// }

function mouseover() {
  console.log("i am anand bhagat");
}
function keypressevent() {
  console.log("key was pressed");
}
function keyupevent() {
  console.log("key up was pressed");
}
function keydownevent() {
  console.log("key down was pressed");
}

//event listener
const box1 = document.getElementById("box-1");
// box1.addEventListener('mousemove',(e)=>{
//     console.log('event object',e.clientX,e.clientY);
// })

box1.addEventListener("click", () => {
  console.log("click on box ");
});

const container = document.getElementById("container");
container.addEventListener("click",() => {
    console.log("click on container");
  },true);

const nameinput = document.getElementById("nameinput");
nameinput.addEventListener("keypress", (e) => {
  console.log("key", e.key);
});

box1.addEventListener("mousemove", (e) => {
  console.log("event object", e);
});

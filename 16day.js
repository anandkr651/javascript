/*const mybody=document.body;
// mybody.style.backgroundColor="red";
console.log(mybody);

const box2 =document.getElementById('box-2');
console.log(box2);

const divs=document.getElementsByTagName('div');
console.log(divs);

const boxes=document.getElementsByClassName('random');
console.log(boxes);

const random=document.querySelector('.container .random');
console.log(random);
*/

const box1=document.getElementById('box-1');
 box1.innerHTML="<h1>hello</h>"
box1.style.backgroundColor='red'


const boxes = document.getElementsByClassName('box');
for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add('round-border');
}

box1.classList.remove('round-border');


const newpragraph= document.createElement('p');
newpragraph.innerText="this is my pen."
newpragraph.classList.add('box');

const container =document.getElementById('container');
container.appendChild(newpragraph)

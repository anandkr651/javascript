const buttons = document.querySelectorAll('.button');
const form = document.querySelector('form');
const body = document.querySelector("body")

   form.addEventListener('submit',function(e){
      e.preventDefault();

 buttons.forEach(function(button){
    button.addEventListener('click',function(e){
      console.log(e.target);

const results = document.querySelector('#results')
const first = parseInt(document.querySelector('#first').value);
const second = parseInt(document.querySelector('#second').value);

 if(first === '' || first < 0 || isNaN(first)) {
    results.innerHTML = `please give the positive number ${first}`;
 } 
 else if(second === '' || second < 0 || isNaN(second)){
    results.innerHTML = `please give the positive number ${second}`;
}

else{
 if(e.target.id==='addition'){
   const sum = (first + second);
    results.innerHTML = `<span>${sum}</span>`;
    body.style.backgroundColor= 'yellow'

 }
 else if(e.target.id==='substrction'){
   const sub = (first - second);
   results.innerHTML = `<span>${sub}</span>`;
   body.style.backgroundColor='green'
}
else if(e.target.id==='multiplication'){
   const mul = (first * second);
   results.innerHTML = `<span>${mul}</span>`;
   body.style.backgroundColor= 'orange'
}
else if(e.target.id==='division'){
   const div = (first / second);
   results.innerHTML = `<span>${div}</span>`;
   body.style.backgroundColor= 'blue'
}
}
    })
   })
})
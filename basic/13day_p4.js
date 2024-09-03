// document.getElementById('owl').onclick = function(){
//    alert("owl clicked")
// }

// document.getElementById('owl').addEventListener('click',function(e){
//   alert("owl clicked again")
//   console.log(e);
// }, false)   //default false hi hota hai

//type, timestamp,defaltprevented
//target,toelement,srcelement,cuurenttarget,
//clientx,clienty,screenx,screeny //mouse eventlistener
//altkey,ctrlkey,shiftkey,keycode //keyboard eventlistener

// document.getElementById('images').addEventListener('click',function(e){
//    console.log("clicked inside the ul");
//   }, false)
//   document.getElementById('owl').addEventListener('click',function(e){
//      console.log("owl clicked");
//  e.stopPropagation()
//   }, false)  //bubbling

// document.getElementById('images').addEventListener('click',function(e){
//     console.log("clicked inside the ul");
//  }, true)
//  document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl clicked");
//     e.stopPropagation()
//   }, true)  //capturing

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
  },
  false
);

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.parentNode);
    let removeit = e.target.parentNode;
    removeit.remove();
  },
  false
);

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      let removeit = e.target.parentNode;
      removeit.remove();
    }
  },
  false
);

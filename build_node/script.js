const notecontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function savedata() {
  localStorage.setItem("notes", notecontainer.innerHTML);
}

function showtask() {
  notecontainer.innerHTML = localStorage.getItem("notes");
}
showtask();

createbtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let image = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  image.src = "delete.png";
  notecontainer.appendChild(inputbox).appendChild(image);
  savedata();
});
/*notecontainer.addEventListener('click',function(e){
    if(e.target.tagName ==='IMG'){
         e.target.parentElement.remove();
         savedata();
     }
})
notecontainer.addEventListener("keyup",function(e){
    if(e.target.classList.contains("input-box")){
        savedata();
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==='Enter'){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})*/ //   OR

notecontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    savedata();
  }
});
notecontainer.addEventListener("keypress", () => {
  savedata();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

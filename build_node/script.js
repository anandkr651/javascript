const notescontainer=document.querySelector('.notes-container');
const createbtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');

function shownotes()
{
    notescontainer.innerHTML=localStorage.getItem("ntes");
}
shownotes();

function updatestorage(){
    localStorage.setItem("ntes",notescontainer.innerHTML);
}

createbtn.addEventListener('click',()=>{
    let inputbox=document.createElement('p');
    let img=document.createElement('img');
    inputbox.className='input-box';
    inputbox.setAttribute("contenteditable","true");
    img.src="delete.png"
    notescontainer.appendChild(inputbox).appendChild(img);
    updatestorage();
})
notescontainer.addEventListener('click',function(e){
   if(e.target.tagName==='IMG')
    {
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName==='p'){
       ntes=document.querySelectorAll(".input-box");
       ntes.forEach(nt=>{
        nt.onkeyup=function(){
            updatestorage();
        }
       })
    }
},false)
document.addEventListener("keydown",event=>{
    if(event.key==='Enter')
        {
            document.execCommand('insertLineBreak');
            event.preventdefault();
        }
})
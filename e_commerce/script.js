const menubtn=document.getElementById('menu-btn');
const closebtn=document.querySelector('.close-btn');
const menu=document.querySelector('.nav-links');
const overlay=document.querySelector('.overlay');

const plusbtn=document.querySelector('#plus');
const minusbtn=document.querySelector('#minus');
const amount=document.querySelector('.amount');

const cartbtn=document.querySelector('.cart-btn');
const indicator=document.querySelector('.indicator');
const cart=document.querySelector('.cart-wrp');
const wrp=document.querySelector('.cart-content');
const addbtn=document.querySelector('.add-btn');

const mainthumbnail=document.querySelector('.main-thumbnail');
const images=document.querySelectorAll('.preview img');

const mainthumbnaillightbox=document.querySelector('.lightbox-container .main-thumbnail');


const slider=document.querySelector('.mobile-thumb');
const thumbmob=document.querySelector('.thumb-mob');
const nextbtn=document.getElementById('next');
const prevbtn=document.getElementById('previous');

const closelightboxbtn=document.querySelector('.close-lightbox');
const lightbox=document.querySelector('.lightbox');


let amountvalue=0;
let currentimg=1;

indicator.style.display='none';

function openmenu(){
   menu.classList.add("active");
   overlay.classList.add('active');
}

function closemenu(){
   menu.classList.remove("active");
   overlay.classList.remove('active');
}

function handleplus(){
    amountvalue++;
    amount.innerText=amountvalue; 
}

function handleminus(){
    if(amountvalue>0){
        amountvalue--;
    }
    amount.innerText=amountvalue;
}

function nextimage(){
    if(currentimg==4){
        currentimg=1;
    }else{
        currentimg++;
    }
    thumbmob.src=`image-product-${currentimg}.jpg`;
}

function previmage(){
    if(currentimg==1){
        currentimg=4;
    }else{
        currentimg--;
    }
    thumbmob.src=`image-product-${currentimg}.jpg`;
}

function togglecart(){
    cart.classList.toggle('invisible');
}
function closelightbox(){
    lightbox.classList.add('invisible');
}

function openlightbox(){
    lightbox.classList.remove('invisible');
}

function additem(){
    if(amountvalue>0){
        const total=125.00 * amountvalue;
        wrp.classList.remove('empty');
        wrp.innerHTML=`<div class="product">
                        <div>
                        <img src="image-product-1-thumbnail.jpg" class="product-img" alt="product">
                        <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                        <p><span>$125.00</span> * <span class="number">${amountvalue}</span> <b>$${total}</b></p>
                        </div>
                        <button class="delete-btn" onclick="deleteitem()"><img src="icon-delete.svg" alt="delete"></button>
                        </div>
                        <button class="checkout-btn">checkout</button>
                        </div>`;
        indicator.style.display="block";
        indicator.innerText=amountvalue;
    }
}

function deleteitem(){
    wrp.classList.add("empty");
    wrp.innerHTML=`<p>your cart is empty</p>`;
    indicator.style.display="none";
}

images.forEach((image)=>{
    image.addEventListener("click",()=>{
        const lastimg=document.querySelectorAll(".selected");
        if(lastimg){
            lastimg[0].classList.remove('selected');
        }
        image.classList.add("selected");
        const selectedimg =document.querySelector(".selected");
        switch (selectedimg.getAttribute("src")){
            case "image-product-1-thumbnail.jpg":
                mainthumbnail.src="image-product-1.jpg";
                mainthumbnaillightbox.src="image-product-1.jpg";
                break;
            case "image-product-2-thumbnail.jpg":
                mainthumbnail.src="image-product-2.jpg";
                mainthumbnaillightbox.src="image-product-2.jpg";
                break;
            case "image-product-3-thumbnail.jpg":
                mainthumbnail.src="image-product-3.jpg";
                mainthumbnaillightbox.src="image-product-3.jpg";
                break;
            case "image-product-4-thumbnail.jpg":
                mainthumbnail.src="image-product-4.jpg";
                mainthumbnaillightbox.src="image-product-4.jpg";
                break;
        }
    });
});

menubtn.addEventListener("click",openmenu);
closebtn.addEventListener("click",closemenu);

plusbtn.addEventListener("click",handleplus);
minusbtn.addEventListener("click",handleminus);

cartbtn.addEventListener("click",togglecart);
addbtn.addEventListener("click",additem);

nextbtn.addEventListener("click",nextimage);
prevbtn.addEventListener("click",previmage);

closelightboxbtn.addEventListener("click",closelightbox);
mainthumbnail.addEventListener("click",openlightbox);

const menubtn = document.querySelector('.menu-btn');
const closebtn = document.querySelector('.close-btn');
const menu = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

menubtn.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});
closebtn.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');

});

const plusbtn = document.querySelector('.plus');
const minusbtn = document.querySelector('.minus');
const amount = document.querySelector('.amount');
let amountvalue = 0;
plusbtn.addEventListener('click', () => {
    amountvalue++;
    amount.innerText = amountvalue;
})
minusbtn.addEventListener('click', () => {
    if (amountvalue > 0) {
        amountvalue--;
    }
    amount.innerText = amountvalue;
})

const cartbtn = document.querySelector('.cart-btn');
const indicator = document.querySelector('.indicator');
const cart = document.querySelector('.cart-wrp');
const wrp = document.querySelector('.cart-content');
const addbtn = document.querySelector('.add-btn');
indicator.style.display = 'none';

cartbtn.addEventListener('click', () => {
    cart.classList.toggle('invisible');
})
addbtn.addEventListener('click', () => {
    if (amountvalue > 0) {
        const total = 125.00 * amountvalue;
        wrp.classList.remove('empty');
        wrp.innerHTML = `<div class="product">
                         <div >
                            <img src="image-product-1-thumbnail.jpg" alt="product" class="product-img" />
                            <div class="product-info">
                                <p class="product-title">Fall Limited Edition Sneakers</p>
                                <p><span>$125.00</span> * <span class="number">${amountvalue}</span> <b>= $${total}</b></p>
                            </div> 
                            <button class="delete-btn" onclick="deleteitem()"><img src="icon-delete.svg" alt="delete"></button>
                         </div>
                         <button class="checkout-btn">checkout</button>
                        </div>`;
        indicator.style.display = "block";
        indicator.innerText = amountvalue;
    }
})
function deleteitem() {
    wrp.classList.add('empty');
    wrp.innerHTML = `<p>your card is empty</p>`;
    indicator.style.display = "none";
}

const slider = document.querySelector('.mobile-thumb');
const thumbmob = document.querySelector('.thumb-mob');
const nextbtn = document.getElementById('next');
const prevbtn = document.getElementById('previous');
let currentimg = 1;

nextbtn.addEventListener('click', () => {
    if (currentimg == 4) {
        currentimg = 1;
    } else {
        currentimg++;
    }
    thumbmob.src = `image-product-${currentimg}.jpg`;
})

prevbtn.addEventListener('click', () => {
    if (currentimg == 1) {
        currentimg = 4;
    } else {
        currentimg--;
    }
    thumbmob.src = `image-product-${currentimg}.jpg`;
})

const mainthumbnail = document.querySelector('.main-thumbnail');
const images = document.querySelectorAll('.short-img img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        const lastimg = document.querySelectorAll('.selected');
        if (lastimg) {
            lastimg[0].classList.remove('selected')
        }
        image.classList.add("selected");
        const selectedimg = document.querySelector(".selected");
        switch (selectedimg.getAttribute("src")) {
            case "image-product-1-thumbnail.jpg":
                mainthumbnail.src = "image-product-1.jpg";
                break;
            case "image-product-2-thumbnail.jpg":
                mainthumbnail.src = "image-product-2.jpg";
                break;
            case "image-product-3-thumbnail.jpg":
                mainthumbnail.src = "image-product-3.jpg";
                break;
            case "image-product-4-thumbnail.jpg":
                mainthumbnail.src = "image-product-4.jpg";
                break;
        }
    })
})
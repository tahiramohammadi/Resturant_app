

import menuArray from "/data.js";

const emojiName = document.getElementById('emoji-name')
const FoodName = document.getElementById('food-name')
const Addorder=document.getElementById('add_order')
const sectionOrder=document.querySelector('.section-order')
let orderContent = document.querySelector('.order_containt')
let totalPrice=document.querySelector('.total-price')
let Btn=document.querySelector('.btn')
let form=document.querySelector('.form')
let Name=document.querySelector('.Name')
let Code =document.querySelector('.Code')
let CCV=document.querySelector('.CCV')
let end=document.querySelector('.end')

function renderMenu() {
let food = ``
let emoji= ``
let Order=``

for (let recipe of menuArray ){
    emoji +=`  <h1 class="emoji">${recipe.emoji}</h1>`

    food += `<div class="name-food">
        <p class="name">${recipe.name}</p>
         <p class="ing">${recipe.ingredients}</p>
        <p class="price">${recipe.price}</p> 
    </div>
    `
    Order +=`<p class="plus">${recipe.plus}</p>`
}

FoodName.innerHTML=food;
emojiName.innerHTML=emoji;
Addorder.innerHTML=Order
}
renderMenu(menuArray);

Addorder.addEventListener('click', function(e){
    sectionOrder.style.display='inline';
    end.style.display='none';
    const clicked = Array.from(this.children).indexOf(e.target);
    const itemName = menuArray[clicked].name;
    const itemPrice = menuArray[clicked].price;
    orderContent.innerHTML += `
    <div class="ItemContent">
        <p class="item-name">${itemName}</p>
        <p class="remove">Remove</p> 
        <p class="item-price">${itemPrice}</p>
     </div>   
  `;
    totalPrice.innerHTML = Number(totalPrice.innerHTML) + itemPrice;
});

orderContent.addEventListener('click', function(e){
    if (e.target.classList.contains("remove")) {
        const itemToRemove = e.target.parentElement;
        const itemPrice = parseFloat(itemToRemove.querySelector('p:nth-child(3)').textContent);
        totalPrice.textContent = parseFloat(totalPrice.textContent) - itemPrice;
        itemToRemove.remove();
    }
});

 Btn.addEventListener('click', function(e){
    if(totalPrice.innerHTML==0){
        alert('You did not add anything')
        form.style.display="none";
    } else{
        form.style.visibility="visible";
        Name.value="";
        CCV.value="";
        Code.value="";
        form.style.opacity="1";
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
        let name = Name.value; 
        end.style.display = 'inline';
        end.innerHTML = `Thanks, ${name}! Your order is on its way!`;
        form.style.visibility = 'hidden';
        sectionOrder.style.display = 'none';
        orderContent.innerHTML = '';
        totalPrice.innerHTML = 0;
    
});

   

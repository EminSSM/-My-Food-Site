const search_form = document.querySelector(".search-form");
const card_item = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//button
const search_btn = document.querySelector("#search-btn");
const cart_btn = document.querySelector("#cart-btn");
const menu_btn = document.querySelector("#menu-btn");

search_btn.addEventListener('click',function(){
 search_form.classList.toggle("active");
 document.addEventListener('click',function(e){
    if(
        !e.composedPath().includes(search_btn) &&
        !e.composedPath().includes(search_form)){
        search_form.classList.remove('active');
    }
 });
});
cart_btn.addEventListener('click',function(){
    card_item.classList.toggle("active");
    document.addEventListener('click',function(e){
       if(
           !e.composedPath().includes(cart_btn) &&
           !e.composedPath().includes(card_item)){
           card_item.classList.remove('active');
       }
    });
});
menu_btn.addEventListener('click',function(){
    navbar.classList.toggle("active");
    document.addEventListener('click',function(e){
       if(
           !e.composedPath().includes(menu_btn) &&
           !e.composedPath().includes(navbar)){
           navbar.classList.remove('active');
       }
    });
});
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      clos = document.querySelector('.menu__close');
      
hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});

clos.addEventListener('click', ()=>{
    menu.classList.remove('active');
});
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav__close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}


if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const LinkAction = () =>{
    const navMenu =document.getElementById('nav__menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', LinkAction));

/*=============== SWIPER CLOTHING ===============*/
let swiperHOME = new Swiper('.homeSwiper', {
    loop: true,
    grabCursor:true,
    slidesPerView:'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

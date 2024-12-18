let stars = document.getElementById(`stars`);
let moon = document.getElementById(`moon2`);
let mountains3 = document.getElementById(`mountains3`);
let starmountains4s = document.getElementById(`mountains4`);
let river5 = document.getElementById(`river5`);
let boat6 = document.getElementById(`boat6`);
let nouvil = document.querySelector(`nouvil`);



window.onscroll = function(){
    let value =scrollY;
    stars.style.left = value + `px`
    moon2.style.top = value *3 + `px`
    mountains3.style.top = value *1.5 + `px`
    mountains4.style.top = value *1.2 + `px`
    river5.style.top = value *1.1 + `px`
    boat6.style.left = value *2.5 + `px`
    boat6.style.top = value + `px`
    nouvil.style.fontSize = value + `px`
}


let   currentIndex =0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const perv = document.querySelector(".perv");
const next = document.querySelector(".next");


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    currentIndex++;

    if (currentIndex > slides.length -1){
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

function pervSlide() {
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = 2;
    }

    showSlide(currentIndex);
}

perv.addEventListener("click", pervSlide);
next.addEventListener("click", nextSlide);

dots.forEach((dot , index) => {
    dot.addEventListener("click" , function(){
        currentIndex = index;
        showSlide(currentIndex);
    })
})
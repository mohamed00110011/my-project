let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscal = document.getElementById("grayscal");
let Blur = document.getElementById("Blur");
let Huroattee = document.getElementById("Huroattee");


let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");


let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');



function resertValue(){
    img.style.filter='none';
    saturate.value= '100';
    contrast.value= '100';
    brightness.value= '100';
    sepia.value= '0';
    grayscal.value= '0';
    Blur.value= '0';
    Huroattee.value= '0';

}

window.onload = function(){
    resertValue()
    download.style.display ='none';
    reset.style.display ='none';
    imgBox.style.display ='none';
}
upload.onchange = function(){
    
    download.style.display ='block';
    reset.style.display ='block';
    imgBox.style.display ='block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload =function(){
        img.src = file.result;
        
    }
    img.onload =function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drrawImge(img,0,0,canvas.width,canvas.height);
        img.style.display='none';
    }
}

let filters =document.querySelectorAll("ul li input");
filters.forEach(filter =>{
    filter.addEventListener('input' , function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscal.value})
        blur(${Blur.value}px)
        Hue-rotate(${Huroattee.value}deg)`

        ctx.drrawImge(img,0,0,canvas.width,canvas.height);
    })
})

download.onclick = function(){
    download.herf = canvas.toDataURL()
}

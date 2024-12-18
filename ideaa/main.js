let t =document.getElementById('switch');


t.addEventListener("click", () =>{
    if(t.checked === true){
        document.body.style.backgroundColor='black';
    }else{
        document.body.style.backgroundColor='white';
    }
})
let titel = document.getElementById('titel');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let search = document.getElementById('search');
let submit = document.getElementById('submit');
let total = document.getElementById('total');
let mood ='create';
let tmp;
let searchMood = 'title';

function getTotal(){
    if(price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML = result;
        total.style.background ='#040'
    }else{
        total.innerHTML ='';
        total.style.background ='#a01010'
    }
}

if(localStorage.product !=null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro= [];
}

submit.onclick = function(){
    let newPro ={
        titel:titel.value.toLowerace(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerace(),
    }

   if(mood === 'create'){
    if(newPro.count > 1){
        for(let i = 0 ; i < newPro.count ; i++ )
            dataPro.push(newPro);
    }else{
        dataPro.push(newPro);
    }
   }else{
    dataPro[ tmp ]=newPro;
    mood= 'create';
    submit.innerHTML='create';
    count.style.display='block';
   }
    dataPro.push(newPro);
    localStorage.setItem('product' ,JSON.stringify(dataPro));

    clearData()
    showData()
}

function clearData(){
    titel.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

function showData(){
    let table ='';
    for(let i =0; i<dataPro.length;i++){
        table +=`
        <tr>
            <td>${[i+1]}</td>
            <td>${dataPro[i].titel}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="update(${i})" id="update">Update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
        </tr>`;
        
        
    }
    document.getElementById('tbody').innerHTML=table;
    let btnDelete =document.getElementById('deleteAll');
    if(dataPro.length > 0){
        btnDelete.innerHTML=`
        <button onclick="deleteAll()">DELETE ALL(${dataPro.length })</button>
        `;
    }else{
        btnDelete.innerHTML='';
    }
}
showData()
getTotal()

function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product=JSON.stringify(dataPro);
    showData();
}

function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();

}

function update(i){
    titel.value =dataPro[i].titel;
    price.value =dataPro[i].price;
    taxes.value =dataPro[i].taxes;
    ads.value =dataPro[i].ads;
    discount.value =dataPro[i].discount;
    getTotal();
    count.style.display='none';
    category.value =dataPro[i].category;
    submit.innerHTML = 'Update';
    mood ='update';
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth'
    })
}


function getSearchMood(id)
{
    let search = document.getElementById('search');
    if(id =='searchTitel'){
        searchMood= 'titel';
        search.placeholder =' search by titel';
    }else{
        searchMood = 'category';
        search.placeholder =' search by category';
        
    }
search.focus()
search.value='';
showData()

}

function searchDate(value){
    let table=''
    if(searchMood == 'titel'){


    for(let i = 0 ; i<dataPro.length;i++){

        
        if(dataPro[i].titel.includes(value.toLowerace())){
            table +=`
        <tr>
            <td>${[i+1]}</td>
            <td>${dataPro[i].titel}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="update(${i})" id="update">Update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
        </tr>`;
        }
    }




    }else{
        for(let i = 0 ; i<dataPro.length;i++){

        
            if(dataPro[i].category.includes(value)){
                table +=`
            <tr>
                <td>${[i+1]}</td>
                <td>${dataPro[i].titel}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button onclick="update(${i})" id="update">Update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
            </tr>`;
            }
        }

    }
    document.getElementById('tbody').innerHTML=table;
}
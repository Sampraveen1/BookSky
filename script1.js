var overlay = document.querySelector(".overlay")
var popupbtn = document.querySelector(".popupbtn")
var addbooks1 = document.querySelector(".addbooks1")

popupbtn.addEventListener("click",function(){
   addbooks1.style.display="block"
   overlay.style.display="block"
  
})

var add = document.getElementById("add")
var canel = document.getElementById("canel")

canel.addEventListener("click",function(){
    addbooks1.style.display="none"
    overlay.style.display="none"
})

//select book
var container = document.querySelector(".container")
var add = document.querySelector(".add")
var bookname = document.getElementById("bookname")
var bookauthor = document.getElementById("bookauthor")
var booktext = document.getElementById("booktext")

add.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${booktext.value}</p>
    <button onclick="dele(event)">Delete</button>`
    container.append(div)
    addbooks1.style.display="none"
   overlay.style.display="none"
})

function dele(event){
    event.target.parentElement.remove()
}



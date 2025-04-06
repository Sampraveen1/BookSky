var overlay = document.querySelector(".overlay")
var addbooks = document.querySelector(".addbooks")
var popupbtn = document.querySelector(".popupbtn")

popupbtn.addEventListener("click",function(){
    overlay.style.display="block"
    addbooks.style.display="block"
 
}
)

var add = document.querySelector(".add")
var canel = document.querySelector(".canel")


canel.addEventListener("click",function(){
    overlay.style.display="none"
    addbooks.style.display="none"
})



//container,add,bookname,bookauthor,bookdes

var container = document.querySelector(".container")
var add = document.querySelector(".add")
var bookname = document.getElementById("bookname")
var bookauthor = document.getElementById("bookauthor")
var bookdes = document.getElementById("bookdes")

add.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${bookname.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${bookdes.value}</p>
    <button onclick="delete2(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    addbooks.style.display="none"
})


function delete2(event){
  event.target.parentElement.remove()
}
 
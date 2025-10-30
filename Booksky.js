// To make responsive of bookskky project



let popupoverlay = document.querySelector(".popup_overlay")
let popupbook = document.querySelector(".popup_book")
let addbutton = document.querySelector(".add_button")
let cancelpopup = document.getElementById("cancel_popup")
addbutton.addEventListener("click",function(){
    popupbook.style.display="block"
    popupoverlay.style.display="block"
})
cancelpopup.addEventListener("click",function(e){
    e.preventDefault()
    popupbook.style.display="none"
    popupoverlay.style.display="none"
})

let container=document.querySelector(".container")
let addbook = document.getElementById("add_book")
let booktitleinput = document.getElementById("book_title_input")
let bookauthorinput = document.getElementById("book_author_input")
let bookdescriptioninput = document.getElementById("book_description_input")

addbook.addEventListener("click",function(e){
    e.preventDefault()
    let div = document.createElement("div");
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5> 
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupbook.style.display="none"
    popupoverlay.style.display="none"
})


function deletebook(event){
    event.target.parentElement.remove();
}




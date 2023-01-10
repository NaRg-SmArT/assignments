

const list = document.addItem

list.addEventListener("submit", function(event){
event.preventDefault()


const listItem = list.title.value
list.title.value = ""

const ul = document.getElementById("list")
const addLi = document.createElement("li")
const edit = document.createElement("button")
const deleteBtn = document.createElement("button")

edit.textContent = "edit"
deleteBtn.textContent = "X"


ul.appendChild(addLi)
const food = document.createElement("div")
food.textContent = listItem
addLi.append(food, edit, deleteBtn)

document.getElementById("list").append(addLi)




//DESTROY LIST ITEMS

deleteBtn.addEventListener("click", function(event){
   food.remove()
   deleteBtn.remove()
   edit.remove()
})

})


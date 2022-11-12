const titleInput = document.getElementById("title")
const authorInput = document.getElementById("author")
const pagesInput = document.getElementById("pages")
const readInput = document.getElementById("read")
const imageInput = document.getElementById("image")
const bookList = document.getElementById("book-list")
const button = document.querySelector(".submit-button") 
const Table = document.getElementById("table")
const addButton = document.getElementById("add")
const submitForm = document.getElementById("book-form")

addButton.addEventListener("click", function(e){
   if(submitForm.style.display == "none"){
    submitForm.style.display = "flex"
   } else {
    submitForm.style.display = "none"
   }
})

button.addEventListener("click", function(e){
    if(titleInput.value == "" || authorInput.value == "" || pagesInput.value == "" || readInput.value == "") {
        alert("Enter any input!")
    } else {
        const Card = document.createElement("div")
        Card.classList.add("card")
        Table.appendChild(Card)

        const newTitle = document.createElement("p")
        newTitle.classList.add("title")
        newTitle.innerHTML = titleInput.value;
        Card.appendChild(newTitle)

        const newAuthor = document.createElement("p")
        newAuthor.classList.add("author")
        newAuthor.innerHTML = authorInput.value;
        Card.appendChild(newAuthor)

        const newFlex = document.createElement("div")
        newFlex.classList.add("flex-container")
        Card.appendChild(newFlex)

        const newPages = document.createElement("p")
        newPages.classList.add("pages")
        newPages.classList.add("flex-item")
        newPages.innerHTML = pagesInput.value;
        newFlex.appendChild(newPages)

        const newRead = document.createElement("p")
        newRead.classList.add("read")
        newPages.classList.add("flex-item")
        if(readInput.checked) {
            newRead.innerHTML = "READ"
            newRead.style.color = "green"
        } else {
            newRead.innerHTML = "UNREAD"
            newRead.style.color = "red"
        }

        newFlex.appendChild(newRead)   

        console.log(Card.style.backgroundImage)
        Card.style.backgroundImage = ("url(" + imageInput.value + ")")
    }
})


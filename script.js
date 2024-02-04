const myLibrary = [];
const addBtn = document.querySelector("#newBookButton");
const addForm = document.querySelector("#addBookForm");
const allBooks = document.querySelector(".books");
const addDialog = document.querySelector("#addBookDialog");
const deleteBtn = document.querySelectorAll(".del-btn");
const readBtn = document.querySelectorAll("read-btn");

//New Book object constructor
function Book (title, author, pages, read,item) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
    this.item = item;
    };

//Create new Book object
function createNewBookObj(event){
    event.preventDefault();
    addDialog.close();
    const myFormData = new FormData(event.target);
    const newBook = new Book();

//Add Book info to object
    Object.assign(Book.prototype,newBook);
    newBook.item = myLibrary.length; 
    myFormData.forEach((value, key) => (newBook[key]=value));
    addBookToLibrary(newBook);  
    createBook(newBook);
    addForm.reset();
};

//Add new book object to array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

//Creates and displays new book on clicking Submit button on form
addForm.addEventListener('submit',createNewBookObj);

//Display Add Book form on clicking Add button
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    addDialog.showModal();
});

//Create new book
function createBook(newBook) {
    let x = myLibrary.length-1;  //Assigns data-item number for array

    const newCard = document.createElement("div");
    const newBookCover = document.createElement("div");    
    const newTitle = document.createElement("div");

    const newInfo = document.createElement("div");
    const newInfoLine1 = document.createElement("div");
    const newInfoLine2 = document.createElement("div");
    const newInfoLine3 = document.createElement("div");
    const newInfoLine4 = document.createElement("div");
    const newInfoTitleTitle = document.createElement("div");
    const newInfoDataTitle = document.createElement("div");
    const newInfoTitleAuthor = document.createElement("div");
    const newInfoDataAuthor = document.createElement("div");
    const newInfoTitlePages = document.createElement("div");
    const newInfoDataPages = document.createElement("div");
    const newInfoTitleRead = document.createElement("div");
    const newInfoDataRead = document.createElement("div");
    const infoFooter = document.createElement("div");
    const readButton = document.createElement("button");
    const newTrashImg = document.createElement("img");

    newCard.className="books-card";
    newCard.setAttribute("data-item", x);
    newBookCover.className="book-cover";
    newTitle.className="book-cover-title";
    newInfo.className="info";

    newInfoLine1.className="info-line line1";
    newInfoLine2.className="info-line line2";
    newInfoLine3.className="info-line line3";
    newInfoLine4.className="info-line line4";
    infoFooter.className="info-foooter ";

    newInfoTitleTitle.className="info-title title-title";
    newInfoDataTitle.className="info-data data-title";
    newInfoTitleAuthor.className="info-title title-author";
    newInfoDataAuthor.className="info-data data-author";
    newInfoTitlePages.className="info-title title-pages";
    newInfoDataPages.className="info-data data-pages";
    newInfoTitleRead.className="info-title title-read";
    newInfoDataRead.className="info-data data-read";
    newTrashImg.className="del-btn";
    readButton.className="read-btn";

    newTitle.textContent=newBook.title;
    newInfoTitleTitle.textContent="Title:";
    newInfoDataTitle.textContent= newBook.title;
    newInfoTitleAuthor.textContent="Author:";
    newInfoDataAuthor.textContent= newBook.author;
    newInfoTitlePages.textContent="Pages:";
    newInfoDataPages.textContent=newBook.pages;
    newInfoTitleRead.textContent="Read:";
    newInfoDataRead.textContent=newBook.read;

    if(newBook.read=="Read") {
        readButton.textContent="Not read yet";
    }
    else {
        readButton.textContent="Read"; 
    }

    newTrashImg.src="delete.svg";
    newTrashImg.alt = "Remove";
    
        allBooks.appendChild(newCard);
        newCard.appendChild(newBookCover);
        newBookCover.appendChild(newTitle);

        newCard.appendChild(newInfo);

        newInfo.appendChild(newInfoLine1);
        newInfoLine1.appendChild(newInfoTitleTitle);
        newInfoLine1.appendChild(newInfoDataTitle);

        newInfo.appendChild(newInfoLine2);
        newInfoLine2.appendChild(newInfoTitleAuthor);
        newInfoLine2.appendChild(newInfoDataAuthor);

        newInfo.appendChild(newInfoLine3);
        newInfoLine3.appendChild(newInfoTitlePages);
        newInfoLine3.appendChild(newInfoDataPages);

        newInfo.appendChild(newInfoLine4);
        newInfoLine4.appendChild(newInfoTitleRead);
        newInfoLine4.appendChild(newInfoDataRead);

        newCard.appendChild(infoFooter);
        infoFooter.appendChild(readButton);
        infoFooter.appendChild(newTrashImg);
    }

// Event listener to call either Delete or ReadToggle
allBooks.addEventListener("click",(e)=> {    
    if (e.target.className=="del-btn") {
        deleteThisBook(e);
    }
    else if (e.target.className=="read-btn") {
        readToggle(e);
    }
    }   )   ;

//Delete book function
function deleteThisBook(e) {
    const deleteBook = e.target.parentElement.parentElement.parentElement;
    let itemNum = deleteBook.dataset.item;
        deleteBook.parentElement.removeChild(deleteBook);
        delete(myLibrary[itemNum]);
}

//ReadToggle function
function readToggle (e) {
    const readBook = e.target.parentElement.parentElement.parentElement;      
    let itemNum = readBook.dataset.item;
    const thisBook = myLibrary[itemNum];
    let thisReadBtn = e.target;
    let thisReadDisplay = readBook.querySelector(".data-read");

    if (thisBook.read == "Read") {
        thisBook.read = "Not read yet";
        thisReadBtn.textContent="Read";
        thisReadDisplay.textContent="Not read yet";
    }
    else {
        thisBook.read = "Read";
        thisReadBtn.textContent="Not read yet";
        thisReadDisplay.textContent="Read";
    }
}
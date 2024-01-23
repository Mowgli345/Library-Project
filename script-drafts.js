const myDialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click",()=> {
    myDialog.showModal();
});
closeButton.addEventListener("click",()=> {
    myDialog.close();
})






const myLibrary = [];
const addBtn = document.querySelector("#newBookButton");
const newForm = document.querySelector("#addBook");
const allBooks = document.querySelector(".books");

console.log(allBooks);

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let bookInfo = (`${title} by ${author}, ${pages} pages, ${read}`);
        console.log(bookInfo);
        return bookInfo;
    }
};

// const theHobbit = new Book ("The Hobbit", "JRR Tolkien",295,"not read yet");

// console.log(theHobbit.info());


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// for (x=1; x<=6; x++) {
//     let newBook = "book"+x;
//     let pp = (x*127);
//     let myRead;
//     if (x%2==0) {
//         myRead = "not read yet";
//     }
//     else {myRead = "read"};
//     newBook = new Book (`Book ${x}`, `Author ${x+8}`, pp, myRead);
//     addBookToLibrary(newBook);
//     console.log (newBook.info());
// }

// console.log(myLibrary);

const myForm = document.querySelector("form");
// myForm.addEventListener('submit',addBookToLibrary);
myForm.addEventListener('submit',pracCallback);

//Callback function for Submit event listener. Works OK*****
// function pracCallback(event){
//     event.preventDefault();
//     const myFormData = new FormData(event.target);
//     const newBook = {};
//     myFormData.forEach((value, key) => (newBook[key]=value));
//     console.log(newBook);    
//     };

//Adds book to myLibrary
    function pracCallback(event){
        //newForm.style.display="none";  --BLANKED OUT FOR MODAL DIALOGE ATTEMPTS
        newForm.closest();

        event.preventDefault();
        const myFormData = new FormData(event.target);
        const newBook = new Book();
        myFormData.forEach((value, key) => (newBook[key]=value));
        console.log(newBook);  
        addBookToLibrary(newBook);  
        // myLibrary.push(newBook);
        console.log(myLibrary);
        createBook(newBook);

    };

//Adds books to library. Will need review because copy and pasted...

//Add New Book

//Default works for basic. Editing for Modal Dialog
// addBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     if (newForm.style.display="none") {
//         newForm.style.display="block"
//     }
//     else (newForm.style.display="block");
// });

//Editing for Modal Dialog
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    newForm.showModal();
});

function createBook(newBook) {
    const newCard = document.createElement("div");
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

    newCard.className="books-card";
    newTitle.className="books-title";
    newInfo.className="info";

    newInfoLine1.className="info-line line1";
    newInfoLine2.className="info-line line2";
    newInfoLine3.className="info-line line3";
    newInfoLine4.className="info-line line4";

    newInfoTitleTitle.className="info-title title-title";
    newInfoDataTitle.className="info-data data-title";
    newInfoTitleAuthor.className="info-title title-author";
    newInfoDataAuthor.className="info-data data-author";
    newInfoTitlePages.className="info-title title-pages";
    newInfoDataPages.className="info-data data-pages";
    newInfoTitleRead.className="info-title title-read";
    newInfoDataRead.className="info-data data-read";

    newTitle.textContent=newBook.title;
    newInfoTitleTitle.textContent="Title:";
    newInfoDataTitle.textContent= newBook.title;
    newInfoTitleAuthor.textContent="Author:";
    newInfoDataAuthor.textContent= newBook.author;
    newInfoTitlePages.textContent="Pages:";
    newInfoDataPages.textContent=newBook.pages;
    newInfoTitleRead.textContent="Read:";
    newInfoDataRead.textContent=newBook.read;

    allBooks.appendChild(newCard);
    newCard.appendChild(newTitle);
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
}

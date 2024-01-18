const myLibrary = [];

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

const theHobbit = new Book ("The Hobbit", "JRR Tolkien",295,"not read yet");

console.log(theHobbit.info());


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

for (x=1; x<=6; x++) {
    let newBook = "book"+x;
    let pp = (x*127);
    let myRead;
    if (x%2==0) {
        myRead = "not read yet";
    }
    else {myRead = "read"};
    newBook = new Book (`Book ${x}`, `Author ${x+8}`, pp, myRead);
    addBookToLibrary(newBook);
    console.log (newBook.info());
}

console.log(myLibrary);
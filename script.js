let myLibrary = [];
let index = 0;


function Book(title, author, numberOfPages, read) {


    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;

    this.info = function () {
        return title + ", " + author + ", " + numberOfPages + ", " + read;
    }

    this.changeReadStatus = function (newStatus) {
        read = newStatus;
    }


}

function displayBooks() {


    let books = document.querySelector(".book-container");
    let mostRecentBook = myLibrary[myLibrary.length - 1];

    let selectedBook = document.createElement("div");
    selectedBook.className = "book";
    let title = document.createElement("h3");
    let author = document.createElement("h4");
    let numberOfPages = document.createElement("p");
    let read = document.createElement("p");
    let removeFromLibrary = document.createElement("button");
    selectedBook.id = index;
    removeFromLibrary.textContent = "Remove from Library";

    removeFromLibrary.addEventListener("click", (event) => {

        myLibrary.splice(myLibrary[parseInt(selectedBook.id)]);
        books.removeChild(selectedBook);
        index--;

    });

    title.textContent = mostRecentBook.title;
    author.textContent = "Written by: " + mostRecentBook.author;
    numberOfPages.textContent = "Number of pages: " + mostRecentBook.numberOfPages;
    read.textContent = "Read Status: " + mostRecentBook.read;

    selectedBook.appendChild(title);
    selectedBook.appendChild(author);
    selectedBook.appendChild(numberOfPages);
    selectedBook.appendChild(read);
    selectedBook.appendChild(removeFromLibrary);



    books.appendChild(selectedBook);
    index++;

}

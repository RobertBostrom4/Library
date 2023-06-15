let myLibrary = [];
let index = 0;
let readingStatus = "";

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
    let changeReadStatus = document.createElement("button");
    changeReadStatus.textContent = "Change read status";
    selectedBook.id = index;
    removeFromLibrary.textContent = "Remove from Library";

    removeFromLibrary.addEventListener("click", (event) => {

        myLibrary.splice(myLibrary[parseInt(selectedBook.id)]);
        books.removeChild(selectedBook);
        index--;

    });

    changeReadStatus.addEventListener("click", (event) => {

        updateReadStatus(mostRecentBook, read);
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
    selectedBook.appendChild(changeReadStatus);


    books.appendChild(selectedBook);
    index++;

}

function addBookToLibrary(submitButton) {

    let newBookButton = document.querySelector(".new-book");
    let bookTitle = document.querySelector("[name=title]");
    let bookAuthor = document.querySelector("[name=author]");
    let numberOfPages = document.querySelector("[name=num-of-pages]");


    submitButton.addEventListener("click", (event) => {

        let newBook = new Book(bookTitle.value, bookAuthor.value, numberOfPages.value, readingStatus);
        let check = (book) => book.title == newBook.title;

        if (!myLibrary.some(check)) {
            myLibrary.push(newBook);
            displayBooks();

            newBookButton.hidden = false;
            document.querySelector(".header-section").children[2].remove();
        }



        event.preventDefault();
    });

}

function createForm() {

    newBookButton = document.querySelector(".new-book");



    newBookButton.addEventListener("click", (event) => {

        let headerSection = document.querySelector(".header-section");
        let bookForm = document.createElement("form");


        let titleGroup = document.createElement("div");
        let titleLabel = document.createElement("label");
        let titleInput = document.createElement("input");
        titleLabel.setAttribute("for", "title");
        titleLabel.textContent = "Enter a book title: ";
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");

        let authorGroup = document.createElement("div");
        let authorLabel = document.createElement("label");
        let authorInput = document.createElement("input");
        authorLabel.setAttribute("for", "author");
        authorLabel.textContent = "Enter a book author: ";
        authorInput.setAttribute("type", "text");
        authorInput.setAttribute("name", "author");

        let pagesGroup = document.createElement("div");
        let numOfPagesLabel = document.createElement("label");
        let numOfPagesInput = document.createElement("input");
        numOfPagesLabel.setAttribute("for", "num-of-pages");
        numOfPagesLabel.textContent = "Enter the number of pages: ";
        numOfPagesInput.setAttribute("type", "number");
        numOfPagesInput.setAttribute("name", "num-of-pages");

        let readStatusGroup = document.createElement("div");
        let readStatusLabel = document.createElement("label");
        readStatusLabel.textContent = "Have you read the book? "
        let yesButton = document.createElement("button");
        yesButton.textContent = "Yes";
        yesButton.addEventListener("click", (event) => {
            readingStatus = yesButton.textContent;
            event.preventDefault()
        });

        let noButton = document.createElement("button");
        noButton.textContent = "No";
        noButton.addEventListener("click", (event) => {
            readingStatus = noButton.textContent;
            event.preventDefault()
        });

        let submitButtonGroup = document.createElement("div");
        let submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "Add Book to Library");
        submitButton.addEventListener("click", (event) => {

            addBookToLibrary(submitButton);

            event.preventDefault();
        });



        titleGroup.appendChild(titleLabel);
        titleGroup.appendChild(titleInput);
        authorGroup.appendChild(authorLabel);
        authorGroup.appendChild(authorInput);
        pagesGroup.appendChild(numOfPagesLabel);
        pagesGroup.appendChild(numOfPagesInput);
        readStatusGroup.appendChild(readStatusLabel);
        readStatusGroup.appendChild(yesButton);
        readStatusGroup.appendChild(noButton);

        submitButtonGroup.appendChild(submitButton);




        bookForm.appendChild(titleGroup);
        bookForm.appendChild(authorGroup);
        bookForm.appendChild(pagesGroup);
        bookForm.appendChild(readStatusGroup);
        bookForm.appendChild(submitButtonGroup);

        headerSection.appendChild(bookForm);


        newBookButton.hidden = true;

    });




}

function updateReadStatus(book, domObject) {
    book.read == "Yes" ? book.read = "No" : book.read = "Yes";
    domObject.textContent = "Read Status: " + book.read;
}


createForm();







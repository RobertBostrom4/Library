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

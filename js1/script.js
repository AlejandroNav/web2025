function Book(title, author, pages,read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

this.info = function () {
        let readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
    };
    

}

let hobbit = new Book("The Hobbit","Tolkien",400,true)
const btn = document.getElementById("myButton");
const clearBtn = document.getElementById("clearButton"); 
const display = document.getElementById("displayArea");


btn.addEventListener("click", function() {
    display.textContent = hobbit.info();
});


clearBtn.addEventListener("click", function() {
    display.textContent = ""; // This "empties" the div
});
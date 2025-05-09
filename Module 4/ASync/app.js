
// Select elements
const syncBtn = document.querySelector("#sync");
const callbackBtn = document.querySelector("#callbacks");
const promiseBtn = document.querySelector("#promises");
const textArea = document.querySelector("#textOutput");
const subHead = document.querySelector("#subHead")

// Clear output area
output = "";
textArea.innerHTML = output;
subHead.innerHTML = "";

// Declare some variables
const books=[
   {title: "Book 1", body:"This is book 1"},
   {title: "Book 2", body:"This is book 2"}
];
const newBook = {title: "Book 3", body:"This is book 3"};

// Reset the books array
function ResetBooks(books) {
   books.length = 0;
   books.push({title: "Book 1", body:"This is book 1"});
   books.push({title: "Book 2", body:"This is book 2"});
};

// Add the book array to the page
function ShowBooks() {
   output = "";
   books.forEach((book) => {
      output += `${book.title}: ${book.body}<br>`;
   });
   textArea.innerHTML = output;
};

// Add the book to the array and show it using synchronously
function AddBookSync(newBook) {
   ResetBooks(books);
   // books.push(newBook);
   setTimeout(() => {
      books.push(newBook)
   }, 0);
   
   ShowBooks();
};

// Add the book to the array and show it using callback
function AddBookCallback(newBook, ShowBooks) {
   ResetBooks(books);
   setTimeout(() => {
      books.push(newBook);
      ShowBooks();
   }, 0);
};

// Add the book to the array and show it using callback
function AddBookPromise(newBook) {
   ResetBooks(books);
   const p = new Promise((resolve,reject) => {
      setTimeout(() => {
         books.push(newBook);
         let err = false;
         if (!err) {
            resolve("I accept your promise!");
         } else {
            reject("Error: I reject your promise!");
         }
      }, 0);
   });

   return p;
};


/******************
 * Setup Listeners
 ******************/ 
syncBtn.addEventListener("click", (e) => {
   e.preventDefault();
   subHead.innerHTML = "Synchronous Demo"
   AddBookSync(newBook);
});

callbackBtn.addEventListener("click", (e) => {
   e.preventDefault();
   subHead.innerHTML = "Callback Demo"
   AddBookCallback(newBook, ShowBooks);
});

promiseBtn.addEventListener("click", (e) => {
   e.preventDefault();
   subHead.innerHTML = "Promise Demo";
   AddBookPromise(newBook)
   .then(res => ShowBooks())
   .catch(err => console.log(err))
});
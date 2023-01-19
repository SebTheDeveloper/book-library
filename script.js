const form = document.querySelector('form');
const formModal = document.querySelector('.form-modal');
const addBook = document.querySelector('.add-book');
const cancelBtn = document.querySelector('#cancel');
const library = document.querySelector('.library');
let myLibrary = [];

addBook.addEventListener('click', () => {
  formModal.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
  formModal.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = newBook();
  displayBook(book);
  myLibrary.push(book);
  cancelBtn.click();
});

function newBook() {
  const title = document.querySelector('input:nth-of-type(1)').value;
  const author = document.querySelector('input:nth-of-type(2)').value;
  const totalPages = document.querySelector('input:nth-of-type(3)').value;
  const read = document.querySelector('input:nth-of-type(4)').checked;

  return {
    title,
    author,
    totalPages,
    read,
    display: true
  }
}

function displayBook(book) {
  const newBook = document.createElement('div');
  newBook.classList.add('book');
  newBook.dataset.index = myLibrary.length;

  newBook.innerHTML = `
    <p>Book Title: <span>${book.title}</span></p>
    <p>Author: <span>${book.author}</span></p>
    <p># of Pages: <span>${book.totalPages}</span></p>
    <div><label for="read-book">Read: </label><input type="checkbox" id="read-book" ${book.read ? 'checked="true"' : ''}></div>
    <img src="./images/trash-can-outline.png" alt="Remove from Library">`;

  newBook.querySelector('div').addEventListener('click', () => {
    book.read ? book.read = false : book.read = true;
  });

  newBook.querySelector('img').addEventListener('click', () => {
    library.removeChild(newBook);
    book.display = false;
  });

  library.appendChild(newBook);
}

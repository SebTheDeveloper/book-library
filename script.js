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
  newBook();
});

function newBook() {
  const newBook = document.createElement('div');
  newBook.classList.add('book');
  const title = document.querySelector('input:nth-of-type(1)').value;
  const author = document.querySelector('input:nth-of-type(2)').value;
  const totalPages = document.querySelector('input:nth-of-type(3)').value;
  const read = document.querySelector('input:nth-of-type(4)').checked;

  newBook.innerHTML = `
    <p>Book Title: <span>${title}</span></p>
    <p>Author: <span>${author}</span></p>
    <p># of Pages: <span>${totalPages}</span></p>
    <div><label for="read-book">Read: </label><input type="checkbox" id="read-book" ${read ? 'checked="true"' : ''}></div>
    <img src="./images/trash-can-outline.png" alt="Remove from Library">`;
    newBook.querySelector('img').addEventListener('click', () => {
      library.removeChild(newBook);
    });
  library.appendChild(newBook);
  cancelBtn.click();
}

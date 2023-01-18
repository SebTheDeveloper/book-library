const form = document.querySelector('form');
const formModal = document.querySelector('.form-modal');
const addBook = document.querySelector('.add-book');
const cancelBtn = document.querySelector('#cancel');
const library = document.querySelector('.library');

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
  const pagesRead = document.querySelector('input:nth-of-type(4)').value;
  const recommended = document.querySelector('input:nth-of-type(5)').checked;

  if (Number(pagesRead) > Number(totalPages)) {
    alert('Number of read pages cannot exceed total pages. Please try again.');
    cancelBtn.click();
    return;
  }

  newBook.innerHTML = `
    <p>Book Title: <span>${title}</span></p>
    <p>Author: <span>${author}</span></p>
    <p>Pages Read: <span>${pagesRead} / ${totalPages}</span></p>
    <p class="recommended">Recommended: <span>${recommended ? 'Yes' : 'No'}</span></p>
    <img src="./images/trash-can-outline.png" alt="Remove from Library">`;
    newBook.querySelector('img').addEventListener('click', () => {
      library.removeChild(newBook);
    });
  library.appendChild(newBook);
  cancelBtn.click();
}

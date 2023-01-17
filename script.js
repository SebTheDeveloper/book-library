const form = document.querySelector('form');
const formModal = document.querySelector('.form-modal');
const addBook = document.querySelector('.add-book');

addBook.addEventListener('click', () => {
  formModal.style.display = 'flex';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

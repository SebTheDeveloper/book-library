const form = document.querySelector('form');
const formModal = document.querySelector('.form-modal');
const addBook = document.querySelector('.add-book');
const cancelBtn = document.querySelector('#cancel');

addBook.addEventListener('click', () => {
  formModal.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
  formModal.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

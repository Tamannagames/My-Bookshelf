const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const photoUrlInput = document.getElementById('photoUrlInput');
const bookList = document.getElementById('bookList');

bookForm.addEventListener('submit', addBook);

function addBook(event) {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const photoUrl = photoUrlInput.value;

    if (title === '' || author === '' || photoUrl === '') {
        alert('Please fill in all fields');
        return;
    }

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookImage = document.createElement('img');
    bookImage.src = photoUrl;

    const bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details');

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = title;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = author;

    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);

    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookDetails);

    bookList.appendChild(bookCard);

    titleInput.value = '';
    authorInput.value = '';
    photoUrlInput.value = '';
}

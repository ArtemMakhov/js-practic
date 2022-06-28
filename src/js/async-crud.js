const BACE_URL = "http://localhost:3000";



async function addBook(book) {
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(book),
    };
    const response = await fetch(`${BACE_URL}/books`, options);
    const newBook = await response.json();
   
    return newBook;
};

// async function addBookAndUpdateUI() {
//     try {
//         const book = await addBook({});
//         console.log(book);
//     } catch (error) {
//       console.log(error);
//     }
// }

// addBookAndUpdateUI();


async function fetchBooks() {
    const response = await fetch(`${BACE_URL}/books`);
    const books = await response.json();
    return books;
    
}


async function fetchBookById(bookId) {
    const response = await fetch(`${BACE_URL}/books/${bookId}`);
    const book = await response.json();
    return book;
}

async function removeBook(bookId) {
    const url = `${BACE_URL}/books/${bookId}`;
    const options = {
        method: 'DELETE'
    };

    const response =await fetch(url, options);
    return response;
}

async function updateBookById(update, bookId) {
        const options = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };
   
    const response = await fetch(`${BACE_URL}/books/${bookId}`, options);
    const book = await response.json();
    return book;
}
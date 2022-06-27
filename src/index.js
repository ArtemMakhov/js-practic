const BACE_URL = "http://localhost:3000";

// "-------------method GET------------"


// function fetchBooks() {
//     return fetch(`${BACE_URL}/books`).then(res => res.json());
    
// }
    
// function fetchBookById(bookId) {
//    return fetch(`${BACE_URL}/books/${bookId}`).then(res => res.json());
// }

// fetchBooks();

// fetchBookById(3);

// fetchBookById(5);


// "-----------method POST-------------"


// function addBook(book) {
//     const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(book),
//     };
    
//     return fetch(`${BACE_URL}/books`, options).then(res => res.json())
    
// };

// addBook({
//     "title": "Тестовая книга CSS",
//     "author": "Я",
//     "genres": [
//         "CSS"
//     ],
//     "rating": 9,
// }).then(renderBook);

// addBook({
//     "title": "Тестовая книга HTML",
//     "author": "Я",
//     "genres": [
//         "HTML"
//     ],
//     "rating": 8,
// }).then(renderBook)
// .catch (error => console.log(error));

// function renderBook(book) {
//    console.log('backand');
//     console.log(book);
// }

// "-------method PATCH--------------"
 



    // .then(console.log());

// function updateBookById(update, bookId) {
//         const options = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//     };
   
//     return fetch(`${BACE_URL}/books/${bookId}`, options).then(res => res.json());
// }
  
// updateBookById({ title: 'Большая новая книга по NODEJS' }, 16)

// updateBookById({ rating:1 }, 18)

// updateBookById({rating: 4, author: "Bob"},17)


// "---------method DELEDE----------"

// function removeBook(bookId) {
//     const url = `${BACE_URL}/books/${bookId}`;
//     const options = {
//         method:'DELETE'
//     }
//     return fetch(url, options).then(res => res.json())
// }


// removeBook(18)
// removeBook(19)




import AddBook from './NewBook';
import Book from './Book';

const bookList = [
  {
    section: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },

  {
    section: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },

  {
    section: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const BookList = () => (
  <div>
    <div>
      {bookList.map((book) => (
        <div key={book.title}>
          <Book
            section={book.section}
            title={book.title}
            author={book.author}
          />
        </div>
      ))}
    </div>
    <div>
      <AddBook />
    </div>
  </div>
);

export default BookList;

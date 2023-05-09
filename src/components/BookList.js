import { useSelector } from 'react-redux';
import AddBook from './NewBook';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <div>
        <AddBook />
      </div>
    </div>
  );
};

export default BookList;

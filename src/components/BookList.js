import { useSelector } from 'react-redux';
import AddBook from './NewBook';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <div>
        {books && Array.from(books).map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            id={book.item_id}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default BookList;

import AddBook from './NewBook';
import Book from './Book';
import {  useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector((state) => state.books.books)

  return(
    <div>
      <div>
        {books.map((book) => {
          return (
          <Book 
          key={book.item_id}
          item_id={book.item_id}
          category={book.category}
          title={book.title}
          author={book.author}
           />)
        })}
      </div>
      <div>
        <AddBook />
      </div>
    </div>
  );
}

export default BookList;

import AddBook from './NewBook';
import Book from './Book';
import {  useSelector, useDispatch } from "react-redux";
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  let dispatch = useDispatch()
  const books = useSelector((state) => state.books.books)

  const deleteBk = (e) => {
    dispatch(removeBook(e.target.id));
  }
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
          onClick={deleteBk} 
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

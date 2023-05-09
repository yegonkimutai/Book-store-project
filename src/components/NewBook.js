import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './NewBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submit = (e) => {
    e.preventDefault();

    const id = books.length + 1;

    dispatch(addBook({ id: `item${id}`, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book-list">
      <h2>Add Book</h2>
      <form className="main-form">
        <input
          className="book-entry"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="book-entry"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit" className="add-btn" onClick={submit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;

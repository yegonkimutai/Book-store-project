import { useState } from 'react';
import { useDispatch} from 'react-redux';
// import { addBook } from '../redux/books/booksSlice';
import { addBooks } from '../redux/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';
import './NewBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submit = (e) => {
    e.preventDefault()

    dispatch(addBooks({ item_id: uuidv4(), title, author, "category": "" }));
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
          required
        />

        <input
          className="book-entry"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <button type="submit" className="add-btn" onClick={submit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;

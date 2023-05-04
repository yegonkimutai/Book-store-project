import { useState } from 'react';
import './NewBook.css';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    category: '',
  });

  const change = (event) => {
    setBook((book) => ({
      ...book,
      [event.target.name]: event.target.value,
    }));
  };

  const sections = ['Action', 'Economy', 'Science Fiction'];
  const bookOptions = sections.map((section) => (
    <option key={section} value={section}>
      {section}
    </option>
  ));

  return (
    <div className="book-list">
      <h2>Add Book</h2>
      <form className="main-form">
        <input
          className="book-entry"
          type="text"
          placeholder="Book title"
          onChange={change}
          value={book.title}
        />

        <select
          className="book-cat"
          value={book.category}
          onChange={change}
        >
          {bookOptions}
        </select>

        <button type="submit" className="add-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;

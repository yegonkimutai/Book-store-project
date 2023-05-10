import { PropTypes } from 'prop-types';
import { removeABook } from '../redux/books/booksSlice';
import { useDispatch } from 'react-redux';

import './Book.css';

const Book = ({
  id, title, author
}) => {
  const dispatch = useDispatch()
  
  return (
    <div className="single-book" key={id}>
      <h2>{title}</h2>
      <p>{author}</p>

      <button
        type="button"
        onClick={() => dispatch(removeABook(id))}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

import './Book.css';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="single-book">
      <h4>{category}</h4>
      <h2>{title}</h2>
      <p>{author}</p>

      <button
        type="button"
        onClick={() => dispatch(removeBook(id))}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

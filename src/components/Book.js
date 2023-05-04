import { PropTypes } from 'prop-types';

import './Book.css';

const Book = ({ section, title, author }) => (
  <div className="single-book">
    <h4>{section}</h4>
    <h2>{title}</h2>
    <p>{author}</p>

    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  section: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

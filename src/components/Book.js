import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeABook } from '../redux/books/booksSlice';
import { Circle } from 'rc-progress'; 

import './Book.css';

const Book = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(30)

  return (
    <div className='whole-book'>
     <div className="single-book" key={id}>
      <h2>{title}</h2>
      <p>{author}</p>

      <button type='button' className='btn2'>Comment</button>
      <button
        type="button"
        onClick={() => dispatch(removeABook(id))}
      >
        Remove
      </button>
      <button type='button' className='btn3'>Edit</button>
    </div>
    <div className='progress'>
      <Circle className='prog-img'
      percent={percentage}
      strokeColor='blue'
      strokeWidth={5} 
      trailWidth={5}/>
      <p className='text'>
        <span className='figure'>{percentage}%</span><br></br>
        Completed
      </p>
    </div>
    <div className='display'>
      <h2>CURRENT CHAPTER</h2>
      <p>Chapter 3</p>
      <button type='button' onClick={() => setPercentage(percentage + 1)}>UPDATE PROGRESS</button>
    </div>
    </div>
   
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

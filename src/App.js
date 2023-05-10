import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Category from './components/Category';
import { fetchBooks } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="book-sheet">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

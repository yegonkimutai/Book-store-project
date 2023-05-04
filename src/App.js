import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Category from './components/Category';

function App() {
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

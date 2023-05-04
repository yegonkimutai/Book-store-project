import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <div className="book-sheet">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" />
        </Routes>
      </div>
    </div>
  );
}

export default App;

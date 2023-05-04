import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-title">Bookstore CMS</Link>
    <ul>
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </ul>
  </nav>
);

export default Navbar;

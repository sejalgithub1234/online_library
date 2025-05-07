import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className='navbar'>
    <ul>
      <li><Link to="/" className='navlink'>Home</Link></li>
      <li><Link to="/browse" className='navlink'>Browse Books</Link></li>
      <li><Link to="/add" className='navlink'>Add Book</Link></li>
    </ul>
  </nav>
);

export default NavBar;

import { Link } from 'react-router-dom';

const links = [
  { id: '1', text: 'Home', path: '/' },
  { id: '2', text: 'Calculator', path: '/Calculator' },
  { id: '3', text: 'Quotes', path: '/Quotes' },
];
const NavBar = () => (
  <nav className="nav-bar">
    <h2>Math Magicians</h2>
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Link className="link" to={link.path}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;

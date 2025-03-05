import './NavBar.style.scss';
import Link from 'next/link';
import NavPages from './NavPages/NavPages';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" href="/">
        Jenifer Cavalcante | Portfolio
      </Link>

      <NavPages />
    </nav>
  );
}

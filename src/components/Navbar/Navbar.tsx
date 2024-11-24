import '@/styles/navbar.scss';
import Link from 'next/link';
import NavPages from './NavPages';

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

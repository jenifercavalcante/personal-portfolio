import Link from 'next/link';

import { usePagesService } from './Pages.service';
import { IPages } from './Pages.type';
import './Pages.style.scss';

export default function Pages({ setIsMenuOpen }: IPages) {
  const { handleScroll, isActive, isFooterOnFocus } = usePagesService(setIsMenuOpen);

  return (
    <>
      <Link className={`navbar-link ${isActive('/') ? 'active' : ''}`} href="/">
        Home
      </Link>

      <Link className={`navbar-link ${isActive('/about-me') ? 'active' : ''}`} href="/about-me">
        About Me
      </Link>

      <span className={`navbar-link ${isFooterOnFocus ? 'active' : ''}`} onClick={handleScroll}>
        Contact
      </span>
    </>
  );
}

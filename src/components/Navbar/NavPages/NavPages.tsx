'use client';

import { FaBars } from 'react-icons/fa';
import Pages from '../Pages/Pages';
import { useNavPagesService } from './NavPages.service';
import './NavPages.style.scss';

export default function Features() {
  const { isMenuOpen, setIsMenuOpen, toggleMenu } = useNavPagesService();

  return (
    <>
      <div className="mobile-menu">
        <FaBars onClick={toggleMenu} className="menu-icon" />
        <div className={`mobile-links ${isMenuOpen ? 'active' : ''}`}>
          <Pages setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>

      <div className="desktop-menu">
        <Pages setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  );
}

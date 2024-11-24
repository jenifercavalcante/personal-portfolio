'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Pages from './Pages';

export default function Features() {
  const router = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

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

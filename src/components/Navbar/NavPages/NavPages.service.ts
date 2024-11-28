import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useNavPagesService = () => {
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

  return {
    isMenuOpen,
    toggleMenu,
    setIsMenuOpen,
  };
};

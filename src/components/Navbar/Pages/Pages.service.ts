import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const usePagesService = (setIsMenuOpen: (isOpen: boolean) => void) => {
  const router = usePathname();
  const [isFooterOnFocus, setIsFooterOnFocus] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementById('footer');

    if (!footer) return;

    footer.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => router === path && !isFooterOnFocus;

  useEffect(() => {
    const footer = document.getElementById('footer');

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterOnFocus(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isActive,
    isFooterOnFocus,
    handleScroll,
  };
};

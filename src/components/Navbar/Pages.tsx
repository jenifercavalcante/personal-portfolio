import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  setIsMenuOpen: (val: boolean) => void;
}

export default function Pages({ setIsMenuOpen }: Props) {
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

  return (
    <>
      <Link className={`navbar-link ${isActive('/') ? 'active' : ''}`} href="/">
        Home
      </Link>

      <span className={`navbar-link ${isFooterOnFocus ? 'active' : ''}`} onClick={handleScroll}>
        Contact
      </span>
    </>
  );
}

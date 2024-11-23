'use client';

import { TerminalDefaultText } from '@/constansts/terminal';
import { usePathname } from 'next/navigation';

import '@/styles/terminal.scss';

export default function Terminal() {
  const router = usePathname();

  const getContent = () => {
    if (router !== '/') return '';

    return TerminalDefaultText.Home;
  };

  return (
    <div className="terminal">
      <div className="nav-info"></div>

      <div className="content">{getContent()}</div>
    </div>
  );
}

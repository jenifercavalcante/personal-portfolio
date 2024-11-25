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
      <div className="nav-info">
        <div className="actions">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
        </div>

        <span className="title">Jenifer Cavalcante:~</span>
      </div>

      <span className="terminal-sing">~</span>

      <div
        className="content"
        contentEditable
        dangerouslySetInnerHTML={{
          __html: getContent(),
        }}
      ></div>
    </div>
  );
}

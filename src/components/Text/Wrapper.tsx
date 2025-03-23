import React from 'react';

import '@/styles/text.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Wrapper({ children, ...props }: Props) {
  return (
    <span className="text-wrapper" {...props}>
      {children}
    </span>
  );
}

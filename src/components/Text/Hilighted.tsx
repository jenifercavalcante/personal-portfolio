import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Hilighted({ children, ...props }: Props) {
  return <span className="hilighted">{children}</span>;
}

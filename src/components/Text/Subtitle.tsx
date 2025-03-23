import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Subtitle({ children, ...props }: Props) {
  return <h2 className="subtitle">{children}</h2>;
}

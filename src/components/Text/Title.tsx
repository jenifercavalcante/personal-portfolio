import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Title({ children, ...props }: Props) {
  return <h1 className="title">{children}</h1>;
}

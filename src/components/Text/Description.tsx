import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Description({ children, ...props }: Props) {
  return (
    <span className="description" {...props}>
      {children}
      <span className="cursor"></span>
    </span>
  );
}

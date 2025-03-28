import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
}

export default function ButtonWhite({
  outline = false,
  className = '',
  children,
  ...props
}: Props) {
  return (
    <button
      className={`btn ${!outline ? 'btn-white' : 'btn-outline-white'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  className?: string;
}

export default function ButtonGoBack({ outline = false, className = '', ...props }: Props) {
  return (
    <button className={`btn btn-text btn-icon ${className}`} {...props}>
      <FaArrowLeftLong />
      Go Back
    </button>
  );
}

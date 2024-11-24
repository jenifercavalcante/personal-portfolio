interface Props {
  children: React.ReactNode;
  outline?: boolean;
}

export default function ButtonWhite({ outline = false, children, ...props }: Props) {
  return (
    <button className={`btn ${!outline ? 'btn-white' : 'btn-outline-white'}`} {...props}>
      {children}
    </button>
  );
}

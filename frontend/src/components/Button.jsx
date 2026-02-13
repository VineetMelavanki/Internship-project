
export default function Button({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} className="btn" {...props}>
      {children}
    </button>
  );
}
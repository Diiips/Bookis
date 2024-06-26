import './button.css';

export default function Button({ Title, onclick, className }) {
  return (
    <button className={`button-64 ${className}`} role="button" onClick={onclick}>
      <span className="text">{Title}</span>
    </button>
  );
}

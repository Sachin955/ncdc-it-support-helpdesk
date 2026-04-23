import "./Button.css";

function Button({ text, onClick, disabled, className="" }) {
  return (
    
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn custom-btn ${className}`}
      
    >
      {text}
    </button>
  );
}

export default Button;
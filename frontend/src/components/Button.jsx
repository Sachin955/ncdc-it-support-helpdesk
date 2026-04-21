import "./Button.css";

function Button({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className="btn custom-btn w-100"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
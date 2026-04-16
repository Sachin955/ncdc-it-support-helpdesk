import "./Button.css";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn custom-btn flex-fill"
    >
      {text}
    </button>
  );
}

export default Button;
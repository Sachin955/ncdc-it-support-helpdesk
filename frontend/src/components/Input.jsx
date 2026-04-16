import './Input.css'

function Input({ label, placeholder, type = 'text', onChange, value, required }) {
    return (
        <div>
            <label className="form-label fw-semibold">
                {label} {required && <span className="text-danger">*</span>}
            </label>
            <input type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="form-control mb-4"
            />
        </div>
    )

}

export default Input;
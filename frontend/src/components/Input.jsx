import './Input.css'

function Input({ label, placeholder, type = 'text', onChange, required }) {
    return (
        <div>
            <label className="form-label fw-semibold">
                {label} {required && <span className="text-danger">*</span>}
            </label>
            <input type={type} placeholder={placeholder} onChange={onChange} className="form-control mb-4" />
        </div>
    )

}

export default Input;
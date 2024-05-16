// En tu componente InputClean
export default function InputClean({ label, type, name, errors = [], onChange, ...props }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label fw-semibold">{label}</label>
            <input
                id={name}
                name={name}
                {...props}
                className={`form-control ${errors.length ? 'is-invalid' : ''}`}
                placeholder=""
                onChange={onChange} // Añade esta línea
            />
        </div>
    );
}


export default function Input({col='', label, type, name, readonly = false, errors = [], error = '', ...props}) {

    return (
        <div className={"mb-4 "+col}>
            <label htmlFor={name} className="mb-2 fs-3">{ label }</label>
            <input type={type} id={name} name={name} {...props} className={`form-control ${errors.length ? 'is-invalid' : ''} ${error === 'empty'? 'is-invalid': ''}`} placeholder="Ingrese un valor" readOnly={readonly} />
        </div>
    );
}

export default function TextArea({col = '', label, name, errors = [], ...props}) {
    return (
        <div className={"mb-4 "+col}>
            <label htmlFor={name} className="mb-2 fs-3">{ label }</label>
            <textarea id={name} name={name} {...props} className={`form-control ${errors.length ? 'is-invalid' : ''}`} placeholder=""/>
        </div>
    );
}

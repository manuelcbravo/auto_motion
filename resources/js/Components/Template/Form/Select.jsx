import {Link} from "@inertiajs/react";

export default function Select({col='', label, name, items, errors = [], error = '', required=false, module = 'home', disabled = false, ...props}) {

    return (
        <div className={`${label ? 'mb-4' : ''} ${col}`}>
            {label && (
                <label htmlFor={name} className="mb-2 fs-3">{label}</label>
            )}
            {items.length > 0 ? (
                <select id={name} name={name} {...props} className={`form-select ${errors.length ? 'is-invalid' : ''} ${error === 'empty'? 'is-invalid': ''}`}
                        required={required} disabled={disabled}>
                    <option value="">Seleccione una opción</option>
                    {items.map(
                        ({id, name, level}) => (
                            <option key={id} className={level === 0 ? 'bg-light-primary' : ''}
                                    value={id}>{name}</option>
                        )
                    )}
                </select>
            ) : (
                <Link href={route(module)} className="btn btn-outline-primary w-100">
                    Agregar ítem
                </Link>
            )
            }
        </div>
    );
}

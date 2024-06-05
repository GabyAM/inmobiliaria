import { useController } from 'react-hook-form';

export function FormInput({ type = 'text', control, name, rules, label }) {
    const {
        field: { onChange, onBlur, value, ref, name: fieldName }
    } = useController({ name, control, rules });

    function handleInputChange(e) {
        let { value } = e.target;
        if (type === 'number') {
            value = Number(value);
        }
        onChange(value);
    }
    return (
        <div className="form-input">
            <label htmlFor="domicilio">{label}</label>
            <input
                type={type}
                id={name}
                name={fieldName}
                onChange={handleInputChange}
                onBlur={onBlur}
                value={value || ''}
                ref={ref}
                min={0}
            ></input>
        </div>
    );
}

import { useController, useFormContext } from 'react-hook-form';
import { ErrorLabel } from './ErrorLabel';

export function FormInput({ type = 'text', name, rules, label }) {
    const { control, errors } = useFormContext();
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
            {errors && errors[name] && (
                <ErrorLabel>{errors[name].message}</ErrorLabel>
            )}
        </div>
    );
}

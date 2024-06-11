import { useController, useFormContext } from 'react-hook-form';
import { ErrorLabel } from './ErrorLabel';

export function FormCheckbox({ name, label, rules }) {
    const { control, errors } = useFormContext();
    const {
        field: { onChange, onBlur, value, ref, name: fieldName }
    } = useController({ name, control, rules });

    function handleInputChange(e) {
        const { checked } = e.target;
        onChange(Boolean(checked));
    }

    return (
        <div className="form-input checkbox-input">
            <label htmlFor={name}>{label}</label>
            <input
                type="checkbox"
                id={name}
                name={fieldName}
                onChange={handleInputChange}
                onBlur={onBlur}
                checked={Boolean(value)}
                ref={ref}
            ></input>
            {errors && errors[name] && (
                <ErrorLabel>{errors[name].message}</ErrorLabel>
            )}
        </div>
    );
}

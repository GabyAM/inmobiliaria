import { useController } from 'react-hook-form';
import { ErrorLabel } from './ErrorLabel';

export function FormCheckbox({ control, name, label, rules, validationError }) {
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
            {validationError && <ErrorLabel>{validationError}</ErrorLabel>}
        </div>
    );
}

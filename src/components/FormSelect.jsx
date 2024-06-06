import { useController } from 'react-hook-form';
import { ErrorLabel } from './ErrorLabel';

export function FormSelect({
    control,
    name,
    rules,
    label,
    placeholder,
    data,
    isLoading,
    error,
    validationError
}) {
    const {
        field: { onChange, onBlur, value, ref, name: fieldName }
    } = useController({ name, control, rules: { ...rules } });

    function handleInputChange(e) {
        if (data) {
            const { value } = e.target;
            onChange(Number(value));
        }
    }

    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                onChange={handleInputChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                name={fieldName}
                disabled={isLoading || error}
                defaultValue=""
            >
                <option value="" disabled>
                    {isLoading ? 'Cargando...' : placeholder}
                </option>
                {!isLoading &&
                    !error &&
                    data.map((option) => {
                        return (
                            <option key={option.id} value={Number(option.id)}>
                                {option.text}
                            </option>
                        );
                    })}
            </select>
            {validationError && <ErrorLabel>{validationError}</ErrorLabel>}
        </div>
    );
}

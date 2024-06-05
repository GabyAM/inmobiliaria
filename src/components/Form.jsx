import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function Form({
    data,
    disabled = false,
    onSubmit,
    successUrl,
    children
}) {
    const {
        reset,
        handleSubmit,
        control,
        formState: { defaultValues, isSubmitting, errors }
    } = useForm();

    useEffect(() => {
        if (data && !defaultValues) {
            reset(data);
        }
    }, [data, reset, defaultValues]);

    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();

    function handleFormSubmit(formData) {
        if (isSubmitting || disabled) return;

        if (!data) {
            //en crear
            Object.keys(formData).forEach((key) => {
                if (!formData[key] && !errors[key]) {
                    delete formData[key];
                }
            });
        } else {
            //en actualizar
            Object.keys(formData).forEach((key) => {
                if (formData[key] === defaultValues[key]) {
                    delete formData[key];
                }
            });
        }
        return onSubmit(formData)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error en fetch');
                }
                navigate(successUrl);
            })
            .catch((e) => {
                setServerError(e);
            });
    }

    return (
        <form
            className="propiedad-form"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            {React.Children.map(children, (child) => {
                return React.createElement(child.type, {
                    ...{
                        ...child.props,
                        control
                    }
                });
            })}
            <button
                disabled={isSubmitting || disabled}
                className="submit-button"
            >
                {isSubmitting ? 'Enviando...' : 'Guardar'}
            </button>
        </form>
    );
}

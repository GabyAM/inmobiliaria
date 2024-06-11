import '../assets/styles/form.css';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorLabel } from './ErrorLabel';

export function Form({
    data,
    disabled = false,
    initialValues,
    onSubmit,
    successUrl,
    children
}) {
    const {
        reset,
        handleSubmit,
        control,
        formState: { defaultValues, errors, isSubmitting },
        getValues,
        setError
    } = useForm({
        defaultValues: initialValues
    });

    useEffect(() => {
        if (data && defaultValues === initialValues) {
            reset(data);
        }
    }, [data, reset, defaultValues, initialValues]);

    const navigate = useNavigate();

    function handleFormSubmit(formData) {
        if (isSubmitting || disabled) return;

        if (!data) {
            //en crear
            Object.keys(formData).forEach((key) => {
                if (formData[key] == undefined && !errors[key]) {
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
        if (Object.keys(formData).length === 0) return;
        return onSubmit(formData)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Hubo un error al guardar');
                }
                navigate(successUrl);
            })
            .catch((e) => {
                setError('root.serverError', { message: e.message });
            });
    }

    return (
        <FormProvider {...{ control, errors }}>
            <form
                className={`main-form ${isSubmitting ? 'pending' : ''}`}
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                {children}
                <div className="submit-section">
                    <button
                        disabled={isSubmitting || disabled}
                        className="submit-button"
                    >
                        {disabled
                            ? 'Cargando...'
                            : isSubmitting
                              ? 'Enviando...'
                              : 'Guardar'}
                    </button>
                    {errors?.root?.serverError && (
                        <ErrorLabel>
                            {errors.root.serverError.message}
                        </ErrorLabel>
                    )}
                </div>
                <button type="button" onClick={() => console.log(getValues())}>
                    TEST
                </button>
            </form>
        </FormProvider>
    );
}

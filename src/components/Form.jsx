import React, { useEffect, useState } from 'react';
import '../assets/styles/form.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
        formState: { defaultValues, isSubmitting, errors },
        getValues
    } = useForm({ defaultValues: initialValues });

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
            className={`main-form ${isSubmitting ? 'pending' : ''}`}
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            {React.Children.map(children, (child) => {
                //el child puede ser un FormSection o un input
                return (
                    <>
                        {React.createElement(child.type, {
                            ...{
                                ...child.props,
                                control,
                                ...(child.type.name === 'FormSection' && {
                                    errors
                                }),
                                ...(child.props.name &&
                                    errors &&
                                    errors[child.props.name] && {
                                        validationError:
                                            errors[child.props.name].message
                                    })
                            }
                        })}
                    </>
                );
            })}
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
        </form>
    );
}

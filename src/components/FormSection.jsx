import React from 'react';

export function FormSection({ control, children, title, errors }) {
    return (
        <fieldset>
            <div className="form-section-title">
                <div className="horizontal-separator"></div>
                <h3>{title}</h3>
                <div className="horizontal-separator"></div>
            </div>
            {React.Children.map(children, (child) => {
                return (
                    <>
                        {React.createElement(child.type, {
                            ...{
                                ...child.props,
                                control,
                                ...(errors &&
                                    errors[child.props.name] && {
                                        validationError:
                                            errors[child.props.name].message
                                    })
                            }
                        })}
                    </>
                );
            })}
        </fieldset>
    );
}

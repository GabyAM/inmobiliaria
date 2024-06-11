import React from 'react';

export function FormSection({ children, title }) {
    return (
        <fieldset>
            <div className="form-section-title">
                <div className="horizontal-separator"></div>
                <h3>{title}</h3>
                <div className="horizontal-separator"></div>
            </div>
            {children}
        </fieldset>
    );
}

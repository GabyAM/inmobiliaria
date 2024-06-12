import '../assets/styles/contentsection.css';
import React from 'react';

export function ContentSection({ children, title }) {
    return (
        <fieldset className="content-section">
            <div className="content-section-title">
                <div className="horizontal-separator"></div>
                <h3>{title}</h3>
                <div className="horizontal-separator"></div>
            </div>
            {children}
        </fieldset>
    );
}

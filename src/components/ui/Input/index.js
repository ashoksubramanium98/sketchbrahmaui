import React from 'react';

export const Input = ({label ,required, placeholder, border}) => (
    <div className="input-container">
        <label className="label">{label} {required ? '*' : ''}</label>
        <input placeholder={placeholder} style={{border: (border && 'none')}} className="input" />
    </div>
);
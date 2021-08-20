import React from 'react';

export const Input = ({placeholder, border}) => (
    <div>
        <input placeholder={placeholder} style={{border: (border && 'none')}} className="input" />
    </div>
);
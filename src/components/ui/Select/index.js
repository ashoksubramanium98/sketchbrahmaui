import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

export const Select = ({label ,required, placeholder, border}) => (
    <div className="input-container">
        <label className="label">{label} {required ? '*' : ''}</label>
        <div className="d-flex align-items-center justify-content-between input">
            <p className="m-0 text-dark font-weight-600">Select</p>
            <FiChevronDown className="text-dark font-size-xl" />
        </div>
    </div>
);
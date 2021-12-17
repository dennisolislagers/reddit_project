import React from 'react';
import './Button.css';

function Button ({type="button", onClick, svg }) {
    return (
        <button
        type={type}
        onClick={onClick}
        >
            {svg}
        </button>
    );
}

export default Button;
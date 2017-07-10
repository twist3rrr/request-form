import React from 'react';
import Validation from 'react-validation';

export default function setValidationRules() {
    Object.assign(Validation.rules, {
        required: {
            // Function to validate value
            // NOTE: value might be a number -> force to string
            rule: value => {
                return value.toString().trim();
            },
            // Function to return hint
            // You may use current value to inject it in some way to the hint
            hint: value => {
              return <span className='input__error'>Required</span>
            }
        }
    });
};

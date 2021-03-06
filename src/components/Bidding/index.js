import React from 'react';
import propTypes from 'prop-types';

export default function Bidding(props) {
    const { title, description, radioButtons, defaultHandleChange } = props;
    const checkboxes = radioButtons.map((item, index) => {
        let isChecked;
        if (index === 0) {
            isChecked = true;
        } else {
            isChecked = false;
        }

        return (
            <div className="input__wrapper" key={index}>
                <input
                    defaultChecked={isChecked}
                    id={item.id}
                    value={item.value}
                    name="bid"
                    type="radio"
                    className="input__radio"
                    onClick={(e) => defaultHandleChange('requestType', e.target.value)}
                />
                <label
                    htmlFor={item.id}
                    className="input__label input__label--radio"
                >{item.label}</label>
            </div>
        );
    });

    return (
    <div className="block">
        <h2 className="block__heading">{title}</h2>
        <p>{description}</p>
        <div className="form-block">
            <div className="form-block__checkbox-group">
                {checkboxes}
            </div>
        </div>
    </div>
    );
}

Bidding.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    radioButtons: propTypes.array.isRequired
};

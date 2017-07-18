import React from 'react';
import propTypes from 'prop-types';
import ReactSVG from 'react-svg';
import DatePicker from 'react-datepicker';

export default function DateBlocks(props) {
    const { bottomBlocks, bidDeadline, dateOfSelection, defaultHandleChange } = props;
    const blocks = bottomBlocks.map((item, index) => {
        const { title, description, inputLabel, placeholder, statePropertyName } = item;
        let value;

        switch (index) {
            case 0:
                value = bidDeadline;
                break;
            default:
                value = dateOfSelection;
                break;
        }

        return (
            <div className="col-lg-6" key={index}>
            <div className="block">
                <h2 className="block_heading">{title}</h2>
                <p>{description}</p>
                <div className="form-block">
                    <div className="input__wrapper input__wrapper--with-icon">
                    <span className="input__label">{inputLabel}</span>
                    <div className="w-100--inner">
                        <DatePicker
                            className="input__text"
                            name={statePropertyName}
                            placeholderText={placeholder}
                            selected={value}
                            onChange={date => defaultHandleChange(statePropertyName, date)}
                        />
                    </div>
                    <ReactSVG path="../svg/calendar_1.svg" className="icon icon-input" />
                </div>
            </div>
            </div>
        </div>
        );
    });

    return (
        <div className="row">
            {blocks}
        </div>
    );
}

DateBlocks.propTypes = {
    bottomBlocks: propTypes.array.isRequired
};

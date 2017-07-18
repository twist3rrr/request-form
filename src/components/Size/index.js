import React from 'react';
import propTypes from 'prop-types';
import ReactSVG from 'react-svg';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function Size(props) {
    const {
        title,
        blocks,
        sizePaperType,
        sizeFinishing,
        defaultHandleChange,
        sizeNumberOfPages,
        sizeNumberOfCopies,
        sizeWidth,
        sizeHeight,
        sizeProductionDate
    } = props;
    const { amount, properties, dimensionBlock } = blocks;

    const dimensionBlockComponent = () => {
        const { width, height, dateField } = dimensionBlock;
        return (
            <div>
                <div className="input__wrapper--multiple-group">
                    <div className="input__wrapper">
                        <span className="input__label">
                            {width.label}
                        </span>
                        <input
                            type="number"
                            value={sizeWidth}
                            placeholder="0"
                            min="0"
                            name={width.statePropertyName}
                            className="input__text"
                            onChange={e => defaultHandleChange(width.statePropertyName, e.target.value)}
                        />
                    </div>
                    <div className="input__wrapper">
                        <span className="input__label">
                            {height.label}
                        </span>
                        <input
                            type="number"
                            value={sizeHeight}
                            placeholder="0"
                            min="0"
                            name={height.statePropertyName}
                            className="input__text"
                            onChange={e => defaultHandleChange(height.statePropertyName, e.target.value)}
                        />
                    </div>
                </div>
                <div className="input__wrapper input__wrapper--with-icon">
                    <span className="input__label">
                        {dateField.label}
                    </span>
                    <div className="w-100--inner">
                        <DatePicker
                            className="input__text"
                            name={dateField.statePropertyName}
                            placeholderText={dateField.placeholder}
                            selected={sizeProductionDate}
                            onChange={date => defaultHandleChange(dateField.statePropertyName, date)}
                        />
                    </div>
                    <ReactSVG
                        path="../svg/calendar_1.svg"
                        className="icon icon-input"
                    />
                </div>
            </div>
        );
    };

    const amountBlock = amount.map((item, index) => {
        let stateValue;

        switch (item.statePropertyName) {
            case 'sizeNumberOfPages':
                stateValue = sizeNumberOfPages;
                break;
            default:
                stateValue = sizeNumberOfCopies;
                break;
        }

        return (
            <div className="input__wrapper" key={index}>
                <span className="input__label">
                    {item.label}
                </span>
                <input
                    type="number"
                    value={stateValue}
                    placeholder="0"
                    min="0"
                    name={item.statePropertyName}
                    className="input__text"
                    onChange={e => defaultHandleChange(item.statePropertyName, e.target.value)}
                />
            </div>
        );
    });

    const propertiesBlock = properties.map((block, index) => {
        let valueOfSelect;

        const properyOptions = block.items.map((option, index) => {
            const { label, disabled, value } = option;
            return (
                <option key={index} value={value} disabled={disabled}>
                    {label}
                </option>
            );
        });

        switch (block.statePropertyName) {
            case 'sizePaperType':
                valueOfSelect = sizePaperType;
                break;
            default:
                valueOfSelect = sizeFinishing;
                break;
        }


        return (
            <div className="input__wrapper" key={index}>
                <span className="input__label">
                    {block.label}
                </span>
                <div className="input__select">
                    <select
                        name={block.statePropertyName}
                        value={valueOfSelect}
                        onChange={e => defaultHandleChange(block.statePropertyName, e.target.value)}
                    >
                        {properyOptions}
                    </select>
                </div>
            </div>
        );
    });

    return (
        <div className="block">
            <div className="block__heading">
                <h2>
                    {title}
                </h2>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="form-block block">
                        {propertiesBlock}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-block block">
                        {amountBlock}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-block block">
                        {dimensionBlockComponent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

Size.propTypes = {
    title: propTypes.string.isRequired,
    blocks: propTypes.object.isRequired
};

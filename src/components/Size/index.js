import React from 'react';
import propTypes from 'prop-types';
import ReactSVG from 'react-svg';
import DatePicker from 'react-datepicker';

import { SVG_PATH } from '../../constants';
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
        sizeProductionDate,
        $field,
        $validation
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
                            className="input__text"
                            {...$field('sizeWidth', (e) => defaultHandleChange('sizeWidth', e.target.value))}
                        />
                        {$validation.sizeWidth.show && <span className="input__error">{$validation.sizeWidth.error.reason}</span>}
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
                            className="input__text"
                            {...$field('sizeHeight', (e) => defaultHandleChange('sizeHeight', e.target.value))}
                        />
                        {$validation.sizeHeight.show && <span className="input__error">{$validation.sizeHeight.error.reason}</span>}
                    </div>
                </div>
                <div className="input__wrapper input__wrapper--with-icon">
                    <span className="input__label">
                        {dateField.label}
                    </span>
                    <div className="w-100--inner">
                        <DatePicker
                            className="input__text"
                            placeholderText={dateField.placeholder}
                            selected={sizeProductionDate}
                            {...$field('sizeProductionDate', (date) => defaultHandleChange('sizeProductionDate', date))}
                        />
                        {$validation.sizeProductionDate.show && <span className="input__error">{$validation.sizeProductionDate.error.reason}</span>}
                    </div>
                    <ReactSVG
                        path={`${SVG_PATH}calendar_1.svg`}
                        className="icon icon-input"
                    />
                </div>
            </div>
        );
    };

    const amountBlock = amount.map((item, index) => {
        let stateValue;
        let statePropertyName;

        switch (index) {
            case 0:
                stateValue = sizeNumberOfPages;
                statePropertyName = 'sizeNumberOfPages';
                break;
            default:
                stateValue = sizeNumberOfCopies;
                statePropertyName = 'sizeNumberOfCopies';
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
                    className="input__text"
                    onChange={e => defaultHandleChange(item.statePropertyName, e.target.value)}
                    {...$field(statePropertyName, (e) => defaultHandleChange(statePropertyName, e.target.value))}
                />
                {$validation[statePropertyName].show && <span className="input__error">{$validation[statePropertyName].error.reason}</span>}
            </div>
        );
    });

    const propertiesBlock = properties.map((block, index) => {
        let valueOfSelect;
        let statePropertyName;

        const properyOptions = block.items.map((option, index) => {
            const { label, disabled, value } = option;
            return (
                <option key={index} value={value} disabled={disabled}>
                    {label}
                </option>
            );
        });

        switch (index) {
            case 0:
                valueOfSelect = sizePaperType;
                statePropertyName = 'sizePaperType';
                break;
            default:
                valueOfSelect = sizeFinishing;
                statePropertyName = 'sizeFinishing';
                break;
        }

        return (
            <div className="input__wrapper" key={index}>
                <span className="input__label">
                    {block.label}
                </span>
                <div className="input__select">
                    <select
                        name={statePropertyName}
                        value={valueOfSelect}
                        {...$field(statePropertyName, (e) => defaultHandleChange(statePropertyName, e.target.value))}
                    >
                        {properyOptions}
                    </select>
                    {$validation[statePropertyName].show && <span className="input__error">{$validation[statePropertyName].error.reason}</span>}
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
    blocks: propTypes.object.isRequired,
    sizePaperType: propTypes.string.isRequired,
    sizeFinishing: propTypes.string.isRequired,
    sizeNumberOfPages: propTypes.string.isRequired,
    sizeNumberOfCopies: propTypes.string.isRequired,
    sizeWidth: propTypes.string.isRequired,
    sizeHeight: propTypes.string.isRequired,
    sizeProductionDate: propTypes.oneOfType([
        propTypes.string,
        propTypes.object
    ])
};

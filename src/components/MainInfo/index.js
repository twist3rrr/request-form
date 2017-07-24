import React from 'react';
import propTypes from 'prop-types';

export default function MainInfo(props) {
    const {
        title,
        fields,
        mainInfoName,
        mainInfoDescription,
        defaultHandleChange,
        $field,
        $validation
    } = props;

    const { name, description } = fields;

    return (
        <div className="block">
            <h2 className="block__heading">
                {title}
            </h2>

            <div className="form-block form-block--fixed">
                <div className="input__wrapper">
                    <span className="input__label">
                        {name.label}
                    </span>
                    <input
                        type="text"
                        name={name.statePropertyName}
                        className="input__text"
                        placeholder={name.placeholder}
                        value={mainInfoName}
                        {...$field('mainInfoName', (e) => defaultHandleChange('mainInfoName', e.target.value))}
                    />
                    {$validation.mainInfoName.show && <span className="input__error">{$validation.mainInfoName.error.reason}</span>}
                </div>

                <div className="input__wrapper">
                    <span className="input__label">
                        {description.label}
                    </span>
                    <textarea
                        name={description.statePropertyName}
                        className="input__textarea"
                        placeholder={description.placeholder}
                        value={mainInfoDescription}
                        {...$field('mainInfoDescription', (e) => defaultHandleChange('mainInfoDescription', e.target.value))}
                    />
                    {$validation.mainInfoDescription.show && <span className="input__error">{$validation.mainInfoDescription.error.reason}</span>}
                </div>
            </div>
        </div>
    );
}

MainInfo.propTypes = {
    title: propTypes.string.isRequired,
    fields: propTypes.object.isRequired,
    mainInfoName: propTypes.string.isRequired,
    mainInfoDescription: propTypes.string.isRequired
};

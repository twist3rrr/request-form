import React from 'react';
import Validation from 'react-validation';
import propTypes from 'prop-types';

export default function MainInfo(props) {
  const { title, fields, mainInfoName, mainInfoDescription, defaultHandleChange } = props;
  const { name, description } = fields;

  return (
    <div className="block">
    <h2 className="block__heading">{title}</h2>

    <div className="form-block form-block--fixed">

      <div className="input__wrapper">
        <span className="input__label">{name.label}</span>
        <Validation.components.Input
          type="text"
          name={name.statePropertyName}
          className="input__text"
          placeholder={name.placeholder}
          value={mainInfoName}
          onChange={(e) => defaultHandleChange(name.statePropertyName, e.target.value)}
          validations={['required']}
        />
      </div>

      <div className="input__wrapper">
        <span className="input__label">{description.label}</span>
        <Validation.components.Textarea
          name={description.statePropertyName}
          className="input__textarea"
          placeholder={description.placeholder}
          value={mainInfoDescription}
          onChange={(e) => defaultHandleChange(description.statePropertyName, e.target.value)}
          validations={['required']}
        />
      </div>

    </div>
  </div>
  );
}

MainInfo.propTypes = {
  title: propTypes.string.isRequired,
  fields: propTypes.objectOf(propTypes.objectOf(propTypes.string.isRequired)),
  mainInfoName: propTypes.string.isRequired,
  mainInfoDescription: propTypes.string.isRequired,
  defaultHandleChange: propTypes.func.isRequired
};

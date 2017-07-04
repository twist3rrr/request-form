import React from 'react';
import propTypes from 'prop-types';

export default function MainInfo(props) {
  console.log(props);
  const { title, fields } = props;
  const { name, description } = fields;

  return(
    <div className="block">
    <h2 className="block__heading">{title}</h2>

    <div className="form-block form-block--fixed">

      <div className="input__wrapper">
        <span className="input__label">{name.label}</span>
        <input type="text" className="input__text" placeholder={name.placeholder} />
      </div>

      <div className="input__wrapper">
        <span className="input__label">{description.label}</span>
        <textarea className="input__textarea" placeholder={description.placeholder}></textarea>
      </div>

    </div>
  </div>
  );
}

MainInfo.propTypes = {
  title: propTypes.string.isRequired,
  fields: propTypes.objectOf(propTypes.objectOf(propTypes.string.isRequired))
}

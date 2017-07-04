import React from 'react';
import propTypes from 'prop-types';

export default function Size(props){
  const { title, blocks } = props;
  const { amount, properties, dimension_block } = blocks;

  const amountBlock = amount.map((item, index) => {
    return (
      <div className="input__wrapper" key={index}>
        <span className="input__label">{item.label}</span>
        <input type="number" className="input__text" deafaultValue="0" />
      </div>
    );
  });

  const propertiesBlock = properties.map((block, index) => {

    const propertieOptions = block.items.map((option, index) => {
      const { label, disabled, selected, value } = option;
      return(
        <option key={index} value={value} disabled={disabled}>{label}</option>
      );
    });

    return (
      <div className="input__wrapper" key={index}>
        <span className="input__label">{block.label}</span>
        <div className="input__select">
          <select>
            {propertieOptions}
          </select>
        </div>
      </div>
    );
  });

  return (
    <div className="block">
      <div className="block__heading">
        <h2>{title}</h2>
      </div>
      <div className="row">
        <div className="col-lg-4"><div className="form-block">{propertiesBlock}</div></div>
        <div className="col-lg-4"><div className="form-block">{amountBlock}</div></div>
      </div>
    </div>
  );
}

Size.propTypes = {
  title: propTypes.string.isRequired,
  blocks: propTypes.shape({
    dimension_block: propTypes.object.isRequired,
    properties: propTypes.arrayOf(propTypes.object.isRequired),
    amount: propTypes.arrayOf(propTypes.object.isRequired)
  })
}

import React from 'react';
import propTypes from 'prop-types';
import ReactSVG from 'react-svg';

export default function Size(props){
  const { title, blocks } = props;
  const { amount, properties, dimension_block } = blocks;

  const dimensionBlock = () => {
      const { width, height, date } = dimension_block;
      return (
          <div>
              <div className="input__wrapper--multiple-group">
                  <div className="input__wrapper">
                      <span className="input__label">{width.label}</span>
                      <input type="number" min="0" className="input__text" placeholder={width.placeholder}/>
                  </div>
                  <div className="input__wrapper">
                      <span className="input__label">{height.label}</span>
                      <input type="number" min="0" className="input__text" placeholder={height.placeholder}/>
                  </div>
              </div>
              <div className="input__wrapper input__wrapper--with-icon">
                  <span className="input__label">{date.label}</span>
                  <input type="text" min="0" className="input__text" placeholder={date.placeholder}/>
                  <ReactSVG path="../svg/calendar_1.svg" className="icon icon-input"/>
              </div>
          </div>
      );
  };

  const amountBlock = amount.map((item, index) => {
    return (
      <div className="input__wrapper" key={index}>
        <span className="input__label">{item.label}</span>
        <input type="number" className="input__text" />
      </div>
    );
  });

  const propertiesBlock = properties.map((block, index) => {

    const properyOptions = block.items.map((option, index) => {
      const { label, disabled, value } = option;
      return(
        <option key={index} value={value} disabled={disabled}>{label}</option>
      );
    });

    return (
      <div className="input__wrapper" key={index}>
        <span className="input__label">{block.label}</span>
        <div className="input__select">
          <select>
            {properyOptions}
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
          <div className="col-lg-4">
              <div className="form-block block">{propertiesBlock}</div>
          </div>
          <div className="col-lg-4">
              <div className="form-block block">{amountBlock}</div>
          </div>
          <div className="col-lg-4">
              <div className="form-block block">{dimensionBlock()}</div>
          </div>
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
};

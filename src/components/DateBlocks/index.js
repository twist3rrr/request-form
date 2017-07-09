import React from 'react';
import propTypes from 'prop-types';
import ReactSVG from 'react-svg';

export default function DateBlocks(props){
  const { bottomBlocks } = props;
  const blocks = bottomBlocks.map((item, index) => {
    const { title, description, input_label, placeholder } = item;

    return(
      <div className="col-lg-6" key={index}>
        <div className="block">
          <h2 className="block_heading">{title}</h2>
          <p>{description}</p>
          <div className="form-block">
            <div className="input__wrapper input__wrapper--with-icon">
              <span className="input__label">{input_label}</span>
              <input type="text" className="input__text" placeholder={placeholder} />
                <ReactSVG path="../svg/calendar_1.svg" className="icon icon-input"/>
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
  bottomBlock: propTypes.arrayOf(propTypes.objectOf(propTypes.string.isRequired))
};

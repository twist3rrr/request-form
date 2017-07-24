import React from 'react';
import ReactSVG from 'react-svg';

import { SVG_PATH } from '../../constants';

export default() => {
    return (
        <div className="spinner__wrapper">
            <ReactSVG path={`${SVG_PATH}spinner.svg`} className="example" />
        </div>
    );
};

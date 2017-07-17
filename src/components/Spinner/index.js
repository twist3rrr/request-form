import React from 'react';
import ReactSVG from 'react-svg';

export default() => {
    return (
        <div className="spinner__wrapper">
            <ReactSVG path="../svg/spinner.svg" className="example"/>
        </div>
    );
};

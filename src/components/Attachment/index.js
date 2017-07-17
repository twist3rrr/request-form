import React from 'react';
import propTypes from 'prop-types';
import ReactSVG from 'react-svg';

export default function Attachment(props) {
    const { title, label, reservedLabel, info } = props;
    return (
        <div className="block">

            <div className="block__heading">
                <h2>{title}</h2>
                <span className="block__right-label">{info}</span>
            </div>

            <div className="drop-zone">
                <input className="js-drop-zone-files-count" type="file" name="file-count" />
                <div className="drop-zone__dropping">
                    <ReactSVG path="../svg/draganddrop.svg" className="icon icon-drop" />
                    <p className="font-text default-text">{label}</p>
                    <p className="font-text reserved-text">{reservedLabel}</p>
                </div>
            </div>

        </div>
    );
}

Attachment.propTypes = {
    title: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    reservedLabel: propTypes.string.isRequired,
    info: propTypes.string.isRequired
};

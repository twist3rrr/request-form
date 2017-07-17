import React from 'react';
import propTypes from 'prop-types';
import ReactSVG from 'react-svg';

export default function Attachment(props) {
    const { title, label, reservedLabel, info, files, handleFile, deleteFile } = props;

    const haveFilesClass = files.length ? 'isDropped' : '';

    const filesList = files.map((file) => {
        const { name, extension, id } = file;

        return (
            <div key={id} className="js-drop-zone-droppped drop-zone__dropped">
                <div className="js-drop-zone-item drop-zone__item">
                    <div>
                        <button
                            type="button"
                            data-id="2"
                            className="drop-zone__btn close js-drop-zone-btn"
                            onClick={() => deleteFile(id)}
                        >X
                        </button>
                        <span className="drop-zone__ext js-drop-zone-ext">{extension}</span>
                        <img src="/svg/fileValid.png" alt="file icon" className="icon-csv" />
                    </div>
                <p>{name}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="block">

            <div className="block__heading">
                <h2>{title}</h2>
                <span className="block__right-label">{info}</span>
            </div>

            <div className={`drop-zone ${haveFilesClass}`}>
                <input className="js-drop-zone-files-count" type="file" name="file-count" onChange={(e) => handleFile(e.target.value)} />
                <div className="drop-zone__dropping">
                    <ReactSVG path="../svg/draganddrop.svg" className="icon icon-drop" />
                    <p className="font-text default-text">{label}</p>
                    <p className="font-text reserved-text">{reservedLabel}</p>
                </div>
                {filesList}
            </div>

        </div>
    );
}

Attachment.propTypes = {
    title: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    reservedLabel: propTypes.string.isRequired,
    info: propTypes.string.isRequired,
    files: propTypes.array.isRequired,
    handleFile: propTypes.func.isRequired,
    deleteFile: propTypes.func.isRequired
};

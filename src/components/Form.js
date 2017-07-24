import React, { Component } from 'react';
import propTypes from 'prop-types';
import validationConfig from '../validation';
import { validated } from 'react-custom-validation';

import Spinner from './Spinner';
import MainInfo from './MainInfo';
import Attachment from './Attachment';
import Size from './Size';
import Bidding from './Bidding';
import DateBlocks from './DateBlocks';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Form extends Component {
    render() {
        const {
            isLoading,
            ui,
            rootState,
            defaultHandleChange,
            handleFile,
            deleteFile,
            onValid,
            onInvalid,
            $field,
            $validation,
            $submit
        } = this.props;

        const {
            mainInfoName,
            mainInfoDescription,
            sizePaperType,
            sizeFinishing,
            sizeNumberOfPages,
            sizeNumberOfCopies,
            sizeWidth,
            sizeHeight,
            sizeProductionDate,
            attachment,
            bidDeadline,
            dateOfSelection
        } = rootState;

        const content = !isLoading
            ? (<div className="container pt-3">
                    <h1 className="mb-4">{ui.title}</h1>
                    <MainInfo
                        {...ui.info}
                        $field={$field}
                        $validation={$validation}
                        mainInfoName={mainInfoName}
                        mainInfoDescription={mainInfoDescription}
                        defaultHandleChange={defaultHandleChange}
                    />
                    <Size
                        {...ui.size}
                        $field={$field}
                        $validation={$validation}
                        sizePaperType={sizePaperType}
                        sizeFinishing={sizeFinishing}
                        sizeNumberOfPages={sizeNumberOfPages}
                        sizeNumberOfCopies={sizeNumberOfCopies}
                        sizeWidth={sizeWidth}
                        sizeHeight={sizeHeight}
                        sizeProductionDate={sizeProductionDate}
                        defaultHandleChange={defaultHandleChange}
                    />
                    <Attachment
                        {...ui.attachment}
                        $field={$field}
                        $validation={$validation}
                        files={attachment}
                        handleFile={handleFile}
                        deleteFile={deleteFile}
                    />
                    <Bidding
                        {...ui.bidding}
                        defaultHandleChange={defaultHandleChange}
                    />
                    <DateBlocks
                        $field={$field}
                        $validation={$validation}
                        bottomBlocks={ui.bottomBlocks}
                        bidDeadline={bidDeadline}
                        dateOfSelection={dateOfSelection}
                        defaultHandleChange={defaultHandleChange}
                    />

                    <div className="block">
                        <button
                            className="btn-action js-drop-zone-submit"
                            onClick={(e) => {
                                e.preventDefault();
                                $submit(onValid, onInvalid);
                            }}
                        >Submit a request</button>
                    </div>
                    <NotificationContainer />
            </div>)
            : <Spinner />;

        return (
            <div>
                {content}
            </div>
        );
    }
}

Form = validated(validationConfig)(Form);

Form.propTypes = {
    isLoading: propTypes.bool.isRequired,
    ui: propTypes.object.isRequired,
    rootState: propTypes.object.isRequired,
    defaultHandleChange: propTypes.func.isRequired,
    handleFile: propTypes.func.isRequired,
    deleteFile: propTypes.func.isRequired,
    onValid: propTypes.func.isRequired,
    onInvalid: propTypes.func.isRequired
};

export default Form;

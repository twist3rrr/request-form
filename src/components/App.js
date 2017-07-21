import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { NotificationManager } from 'react-notifications';
import getRequestPage from '../AC/request';


import Form from './Form';

class App extends Component {
    state = {
        mainInfoName: '',
        mainInfoDescription: '',
        sizePaperType: '',
        sizeFinishing: '',
        sizeNumberOfPages: '',
        sizeNumberOfCopies: '',
        sizeWidth: '',
        sizeHeight: '',
        sizeProductionDate: '',
        attachment: [],
        requestType: 'r-1',
        bidDeadline: '',
        dateOfSelection: ''
    };

    componentDidMount() {
        const { getRequestPage } = this.props;
        getRequestPage();
    }

    defaultHandleChange = (statePropName, value) => {
        this.setState({
            [statePropName]: value
        });
    };


    handleFile = (path) => {
        const addFile = () => {
            const src = path;
            const splitedPath = path.split('\\');
            const splitedFileString = splitedPath[splitedPath.length - 1].split('.');
            const extension =  `.${splitedFileString[splitedFileString.length - 1]}`
            const name = splitedFileString[splitedFileString.length - 2];
            const newStateArray = [
                ...this.state.attachment,
                {
                    src,
                    name,
                    extension,
                    id: Date.now()
                }
            ];

            this.setState({
                attachment: newStateArray
            });

            NotificationManager.success('Success', `File: ${splitedPath[splitedPath.length - 1]} was uploaded`);
        }
        
        if(this.state.attachment.length > 4) {
            return console.log('max amount of files');
        } else {
            addFile();
        }
    };

    deleteFile = (id) => {
        let removedFile;
        const newStateArray = this.state.attachment.filter((file) => {
            if(file.id === id) {removedFile = file}
            return file.id !== id;
        });

        this.setState({
            attachment: newStateArray
        });

        NotificationManager.warning('Warning', `File: ${removedFile.name}.${removedFile.extension} was removed`);
    }

    onValid = () => {
        NotificationManager.success('Your request was successfully sent');

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    onInvalid = () => {
        NotificationManager.error('Your request was not sent');

    }

    render() {
        return (
            <Form 
                defaultHandleChange={this.defaultHandleChange}
                handleFile={this.handleFile}
                deleteFile={this.deleteFile}
                ui={this.props.ui}
                isLoading={this.props.isLoading}
                rootState={this.state}
                onValid={this.onValid}
                onInvalid={this.onInvalid}
            />
        );
    }
}

export default connect((state) => {
    const { isLoading, ui } = state.request;

    return {
        isLoading,
        ui
    };
}, {
    getRequestPage
})(App);

App.propTypes = {
    isLoading: propTypes.bool.isRequired,
    ui: propTypes.object.isRequired
};

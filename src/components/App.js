import React, { Component }  from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import getRequestPage from '../AC/request';
import Spinner from './Spinner';
import MainInfo from './MainInfo';
import Attachment from './Attachment';
import Size from './Size';
import Bidding from './Bidding';
import DateBlocks from './DateBlocks';


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
        requestType: '',
        bidDeadline: '',
        dateOfSelection: ''
    };

    componentDidMount() {
        const { getRequestPage } = this.props;
        getRequestPage();
    }

    defaultHandleChange = (statePropName, value) => {
        console.log(value);
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
        }
        
        if(this.state.attachment.length > 4) {
            return console.log('max amount of files');
        } else {
            addFile();
        }
    };

    deleteFile = (id) => {
        console.log(id);
        const newStateArray = this.state.attachment.filter((file) => {
            return file.id !== id;
        });

        this.setState({
            attachment: newStateArray
        });
    }

    render() {
        console.log(this.state);
        const {isLoading, ui} = this.props;
        const content = !isLoading
            ? <div className="container pt-3">
                    <h1 className="mb-4">{ui.title}</h1>
                    <MainInfo {...ui.info}
                        mainInfoName={this.state.mainInfoName}
                        mainInfoDescription={this.state.mainInfoDescription}
                        defaultHandleChange={this.defaultHandleChange}
                    />
                    <Size {...ui.size}
                        sizePaperType={this.state.sizePaperType}
                        sizeFinishing={this.state.sizeFinishing}
                        sizeNumberOfPages={this.state.sizeNumberOfPages}
                        sizeNumberOfCopies={this.state.sizeNumberOfCopies}
                        sizeWidth={this.state.sizeWidth}
                        sizeHeight={this.state.sizeHeight}
                        sizeProductionDate={this.state.sizeProductionDate}
                        defaultHandleChange={this.defaultHandleChange}
                    />
                    <Attachment {...ui.attachment} 
                        files={this.state.attachment} 
                        handleFile={this.handleFile}
                        deleteFile={this.deleteFile}
                    />
                        
                    <Bidding {...ui.bidding}/>
                    <DateBlocks bottomBlocks={ui.bottomBlocks}/>

                    <div className="block">
                        <button className="btn-action js-drop-zone-submit">Submit a request</button>
                    </div>
            </div>
            : <Spinner />;

        return (
            <div>
                {content}
            </div>
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

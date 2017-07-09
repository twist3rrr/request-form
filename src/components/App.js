import React, {Component}  from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Validation from 'react-validation';
import setValidationRules from '../validation'

import getRequestPage from '../AC/request';
import Spinner from './Spinner';
import MainInfo from './MainInfo';
import Attachment from './Attachment';
import Size from './Size';
import Bidding from './Bidding';
import DateBlocks from './DateBlocks';

setValidationRules();

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
        const {getRequestPage} = this.props;
        getRequestPage();
    }

    defaultHandleChange = (statePropName, value) => {
        this.setState({
            [statePropName]: value
        });
    };

    render() {
        const {isLoading, ui} = this.props;
        const content = !isLoading
            ? <div className="container pt-3">
                <Validation.components.Form>
                    <h1 className="mb-4">{ui.title}</h1>
                    <MainInfo {...ui.info}
                          mainInfoName={this.state.mainInfoName}
                          mainInfoDescription={this.state.mainInfoDescription}
                          defaultHandleChange={this.defaultHandleChange}
                    />
                    <Size {...ui.size}/>
                    <Attachment {...ui.attachment}/>
                    <Bidding {...ui.bidding}/>
                    <DateBlocks bottomBlocks={ui.bottom_blocks}/>

                    <div className="block">
                        <Validation.components.Button className="btn-action js-drop-zone-submit">Submit a request</Validation.components.Button>
                    </div>
                </Validation.components.Form>
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
    const {isLoading, ui} = state.request;

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

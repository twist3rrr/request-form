import React, { Component }  from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import getRequestPage from '../AC/request';
import Spinner from './Spinner';
import MainInfo from './MainInfo';
import Attachment from './Attachment';
import Size from './Size';
import Bidding from './Bidding';
import DateBlocks from './DateBlocks'

class App extends Component {
  componentDidMount(){
    const { getRequestPage } = this.props;
    getRequestPage();
  }

  render() {
    const { isLoading, ui } = this.props;
    const content = !isLoading
      ? <div className="container pt-3">
          <h1 className="mb-4">{ui.title}</h1>
          <MainInfo {...ui.info}/>
          <Size {...ui.size}/>
          <Attachment {...ui.attachment}/>
          <Bidding {...ui.bidding}/>
          <DateBlocks bottomBlocks={ui.bottom_blocks}/>

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
}

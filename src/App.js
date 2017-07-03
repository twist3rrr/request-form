import React, { Component }  from 'react';
import getRequestPage from './AC/request';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isLoading, ui } = this.props;
    return (
      <h1>Hello world</h1>
    );
  }
}

export default connect((state) => {
  const { isLoading, ui } = state;
  console.log('isLoading', isLoading);
  console.log('ui', ui);

  return {
    isLoading,
    ui
  }
},{

})(App);

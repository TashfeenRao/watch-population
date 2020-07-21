import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Nav from './nav';
import SingleItem from './SingleItem';

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={App} />
        <Route exact path="/item/:id?" component={SingleItem} />
      </Router>
    </Provider>
  );
};
Root.prototype = {
  store: PropTypes.object.isRequired,
};
export default Root;

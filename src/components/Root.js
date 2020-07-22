import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import App from './App';
import Nav from './nav';
import SingleItem from './SingleItem';
import Footer from './footer';

const Root = props => {
  const { store } = props;
  return (
    <Container fluid className="pl-0 pr-0">
      <Provider store={store}>
        <Router>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={App} />
          <Route exact path="/item/:id?" component={SingleItem} />
          <Route exact path="/item/:id?" component={Footer} />
        </Router>
      </Provider>
    </Container>
  );
};
Root.prototype = {
  store: PropTypes.object.isRequired,
};
export default Root;

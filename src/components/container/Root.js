import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import App from './App';
import Nav from '../presentational/nav';
import GetName from './GetName';
import CountryPop from './CountryPop';

const Root = props => {
  const { store } = props;
  return (
    <Container fluid className="pl-0 pr-0">
      <Provider store={store}>
        <Router>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={App} />
          <Route exact path="/item/:name?" component={GetName} />
          <Route exact path="/year/:year?/:name?/" component={CountryPop} />
        </Router>
      </Provider>
    </Container>
  );
};
Root.defaultProps = {
  store: {
    loading: false,
    input: '',
    error: [''],
  },
};
Root.propTypes = {
  store: PropTypes.shape({
    loading: PropTypes.bool,
    input: PropTypes.string,
    error: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }),
};
export default Root;

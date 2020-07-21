import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Products from './Products';
import fetchProducts from '../actions/fetchProducts';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  render() {
    const { pending, error } = this.props;
    if (pending === true || error === true) {
      return (
        <h1>
          Loading
          {error}
        </h1>
      );
    }
    return (
      <Container>
        <Row>
          <Products />
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  pending: state.loading,
  error: state.error,
}))(App);

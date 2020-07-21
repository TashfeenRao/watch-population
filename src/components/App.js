import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Products from './Products';
import fetchProducts from '../actions/fetchProducts';
import '../style/product.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  render() {
    const { pending, error } = this.props;
    if (pending === true || error === true) {
      return (
        <div className="text-center">
          <div className="spinner-grow spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

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

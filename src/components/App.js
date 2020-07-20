import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Products from './Products';
import fetchProducts from '../actions/fetchProducts';
import fetchCountries from '../actions/fetchCountries';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
    dispatch(fetchCountries());
  }

  render() {
    const { pending } = this.props;
    if (pending === true) return <h1>Loading</h1>;
    return (
      <div className="App">
        <Container>
          <Products />
        </Container>
      </div>
    );
  }
}

export default connect(state => ({
  pending: state.loading,
}))(App);

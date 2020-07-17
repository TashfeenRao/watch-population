import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import fetchProducts from '../actions/fetchProducts';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  render() {
    const { pending } = this.props;
    if (pending === true) return <h1>Loading</h1>;
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default connect(state => ({
  pending: state.loading,
}))(App);

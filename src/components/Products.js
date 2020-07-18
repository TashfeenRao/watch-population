/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    const {
      products,
    } = this.props;
    return (
      <div>
        <ul>
          {Object.entries(products).map((item, index) => (
            <div key={index}>
              <li>{item}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect(state => ({
  products: state.products,
}))(Products);

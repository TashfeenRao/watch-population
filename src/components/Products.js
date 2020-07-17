import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    const { pending, error, products } = this.props;
    const i = 0;
    return (
      <div>
        <ul>
          {Object.entries(products).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect(state => ({
  products: state.products,
}))(Products);

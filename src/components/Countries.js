import React, { Component } from 'react';
import { connect } from 'react-redux';

class Countries extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {Object.entries(products).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    );
  }
}
export default connect(state => (
  {
    products: state.products,
  }
))(Countries);

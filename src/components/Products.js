/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import filterProducts from '../actions/filterProducts';
import '../style/product.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.filterCurrencies = this.filterCurrencies.bind(this);
  }

  filterCurrencies(e) {
    const { dispatch } = this.props;
    dispatch(filterProducts(e.target.value));
  }

  render() {
    const {
      products, filters,
    } = this.props;
    const prodArray = Object.entries(products);
    const filteredProducts = () => ((filters !== '') ? prodArray.filter(prod => prod[0] === filters.toUpperCase()) : prodArray);
    return (
      <div>
        <input type="text" name="input" onChange={e => this.filterCurrencies(e)} />
        <div className="currencyContainer">
          {filteredProducts().map((item, index) => (
            <Link to={`/item/${index}`} key={index}>
              <div className="currencyBox">
                <p>{item[0]}</p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    );
  }
}
export default connect(state => ({
  products: state.products,
  filters: state.input,
}))(Products);

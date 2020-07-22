import React from 'react';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardColumn = props => {
  const {
    products, filters,
  } = props;
      // const filteredProducts = () => ((filters !== '') ? products.filter(prod => prod.name.toLowerCase().includes(filters.toLowerCase())) : products);
    //    <img src={require('../images/USD.svg')} alt="logo" />
  const prodArray = Object.entries(products);
  const filteredProducts = () => ((filters !== '') ? prodArray.filter(prod => prod[0].includes(filters.toUpperCase())) : prodArray);
  return (
    <CardColumns>
      {filteredProducts().map((item, index) => (
        <Link to={`/item/${index}`} key={index}>
          <Card text="white" className="text-center p-3 companyBox">
            <blockquote className="blockquote mb-0 card-body">
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form</p>
              <p>
                {item[0]}
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in
                  {' '}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Link>
      ))}
      {' '}
      {(filteredProducts().length === 0) && (<h1>Nothing found</h1>)}
    </CardColumns>
  );
};
export default connect(state => ({
  products: state.products,
  filters: state.input,
}))(CardColumn);

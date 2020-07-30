/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Nothing from '../presentational/nothing';

const CardColumn = props => {
  const {
    products, filters,
  } = props;
  const countries = products.reverse();
  const filteredProducts = () => ((filters !== '') ? countries.filter(prod => prod.iso3.toLowerCase().includes(filters.toLowerCase())) : countries.slice(0, 30));
  return (
    <CardColumns>
      {filteredProducts().map(item => (
        <Link to={`/item/${item.iso3}`} key={item.id}>
          <Card text="white" className="text-center p-3 companyBox">
            <blockquote className="blockquote mb-0 card-body">
              <p>{`Country: ${item.iso3}`}</p>
              <p>{`Descp: ${item.title}`}</p>
              <p>{`Year: ${item.popyear}`}</p>
            </blockquote>
          </Card>
        </Link>
      ))}
      {' '}
      {(filteredProducts().length === 0) && (<Nothing />)}
    </CardColumns>
  );
};

CardColumn.defaultProps = {
  products: [],
  filters: '',
  filter: () => undefined,
  toLowerCase: () => undefined,
};
CardColumn.propTypes = {
  filters: PropTypes.string,
  filter: PropTypes.func,
  toLowerCase: PropTypes.func,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      companyName: PropTypes.string,
      symbol: PropTypes.string,
    }),
  ),
};
export default connect(state => ({
  products: state.products,
  filters: state.input,
}))(CardColumn);

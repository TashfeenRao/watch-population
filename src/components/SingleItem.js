import React from 'react';
import { useSelector, connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchProducts from '../actions/fetchProducts';

const SingleItem = props => {
  const { id } = useParams();
  const { dispatch } = props;
  dispatch(fetchProducts());
  const products = useSelector(state => state.products);
  const loading = useSelector(state => state.loading);
  const prodArray = Object.entries(products);
  if (loading === true) return <h1>loading</h1>;
  return (
    <div>
      <h1>
        {products[id].name}
      </h1>
    </div>
  );
};
export default connect()(SingleItem);

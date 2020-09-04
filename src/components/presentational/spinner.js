import React from 'react';
import '../../style/product.css';

const Spinner = () => (
  <div className="text-center pt-5">
    <div className="spinner-grow spinner" role="status">
      <span className="sr-only" data-testid="loading">Loading...</span>
    </div>
  </div>
);
export default Spinner;

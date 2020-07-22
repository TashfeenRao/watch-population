import React from 'react';
import emoji from '../../images/icons8-nothing-found-64.png';

const Nothing = () => (
  <div className="d-flex justify-content-center align-items-center p-2 text-white mb-5">
    <h2>
      Sorry We can find
      <img src={emoji} alt="nothing" />
    </h2>
  </div>
);
export default Nothing;

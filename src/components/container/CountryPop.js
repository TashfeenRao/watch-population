import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryPop = props => {
  const { year } = useParams();
  const { country } = props;
  const countryYearPop = country.filter(item => item.popyear === year);
  console.log(countryYearPop);
  return (
    <div>lets check</div>
  );
};

export default connect(state => ({
  country: state.country,
}))(CountryPop);

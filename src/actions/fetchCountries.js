import { fetchCountryName, fetchDataError } from './index';

const fetchCountries = () => dispatch => {
  fetch('https://openexchangerates.org/api/currencies.json')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchCountryName(res));
    })
    .catch(error => {
      dispatch(fetchDataError(error));
    });
};
export default fetchCountries;

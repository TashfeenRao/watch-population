import { fetchCountryName } from './index';
import errorProducts from './errorProducts';

const fetchCountry = name => dispatch => {
  const request = `https://cors-anywhere.herokuapp.com/https://www.worldpop.org/rest/data/pop/wpgp?iso3=${name}`;
  fetch(request)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchCountryName(res.data));
    })
    .catch(error => {
      dispatch(errorProducts(error));
    });
};
export default fetchCountry;

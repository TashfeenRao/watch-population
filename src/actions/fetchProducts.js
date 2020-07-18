import { fetchDataSuccess, fetchDataError } from './index';

const fetchProducts = () => dispatch => {
  fetch('https://open.exchangerate-api.com/v6/latest')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchDataSuccess(res.rates));
    })
    .catch(error => {
      dispatch(fetchDataError(error));
    });
};
export default fetchProducts;

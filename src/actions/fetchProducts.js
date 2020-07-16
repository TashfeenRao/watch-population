import { fetchDataPending, fetchDataSuccess, fetchDataError } from './index';

const fetchProducts = () => dispatch => {
  dispatch(fetchDataPending());
  fetch('https://open.exchangerate-api.com/v6/latest')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchDataSuccess(res.rates));
      return res.rates;
    });
};
export default fetchProducts;

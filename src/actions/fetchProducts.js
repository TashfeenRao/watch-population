import { fetchDataSuccess } from './index';
import errorProducts from './errorProducts';

const fetchProducts = () => dispatch => {
  const request = 'https://cors-anywhere.herokuapp.com/https://www.worldpop.org/rest/data/pop/wpgp';
  fetch(request)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchDataSuccess(res.data));
    })
    .catch(error => {
      dispatch(errorProducts(error));
    });
};
export default fetchProducts;

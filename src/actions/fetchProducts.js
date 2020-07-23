import { fetchDataSuccess } from './index';
import errorProducts from './errorProducts';

const fetchProducts = () => dispatch => {
  const request = 'https://financialmodelingprep.com/api/v3/profile/AAPL,FB,GOOG,MSFT,AMZN,DIS,INTC,IBM,ORCL,DELL,SPY?apikey=fe9da77e9a196b2900fac0ee234de895';
  fetch(request)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchDataSuccess(res));
    })
    .catch(error => {
      dispatch(errorProducts(error));
    });
};
export default fetchProducts;

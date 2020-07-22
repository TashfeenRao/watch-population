import { fetchDataSuccess } from './index';
import errorProducts from './errorProducts';

const fetchProducts = () => dispatch => {
  const old = 'https://v6.exchangerate-api.com/v6/56a5675aa3fa7007f26ebc5b/latest/USD';
  const request = 'https://financialmodelingprep.com/api/v3/profile/AAPL,FB,GOOG,MSFT,AMZN,DIS,INTC,BABA,IBM,ORCL,DELL,AXP?apikey=46eff4df3d2a1bc0e4ea39c17b59af3f';
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

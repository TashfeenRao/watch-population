import { fetchDataSuccess } from './index';
import errorProducts from './errorProducts';

const fetchProducts = () => dispatch => {
  const request = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,MSFT,AMZN,DIS,INTC,BABA,IBM,ORCL,DELL,SPY?apikey=c3c12c2118fc9fb6c8612eacaaf64ac7';
  fetch('https://v6.exchangerate-api.com/v6/56a5675aa3fa7007f26ebc5b/latest/USD')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchDataSuccess(res.conversion_rates));
    })
    .catch(error => {
      dispatch(errorProducts(error));
    });
};
export default fetchProducts;

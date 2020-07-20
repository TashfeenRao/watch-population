import { fetchDataSuccess, fetchDataError } from './index';

const fetchProducts = () => dispatch => {
  const request = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG,MSFT,AMZN,DIS,INTC,BABA,IBM,ORCL,DELL,SPY?apikey=c3c12c2118fc9fb6c8612eacaaf64ac7';
  fetch(request)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchDataSuccess(res));
    })
    .catch(error => {
      dispatch(fetchDataError(error));
    });
};
export default fetchProducts;

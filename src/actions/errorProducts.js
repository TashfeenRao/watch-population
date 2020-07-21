import { fetchDataError } from './index';

const errorProducts = error => dispatch => {
  dispatch(fetchDataError(error));
};
export default errorProducts;

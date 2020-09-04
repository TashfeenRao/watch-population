import { changeFilter } from './index';

const filterProducts = input => dispatch => {
  dispatch(changeFilter(input));
};
export default filterProducts;

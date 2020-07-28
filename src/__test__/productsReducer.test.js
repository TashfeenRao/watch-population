import productReducer from '../reducers/productReducer';

it('it handles product reducer', () => {
  const initialState = [];
  const newState = productReducer(undefined, []);
  expect(newState).toEqual(initialState);
});

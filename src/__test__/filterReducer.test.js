import filterReducer from '../reducers/filterReducer';

it('it handles filter reducer', () => {
  const initialState = '';
  const newState = filterReducer(undefined, {});
  expect(newState).toEqual(initialState);
});


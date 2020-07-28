import errorReducer from '../reducers/errorReducer';

it('it handles error reducer', () => {
  const initialState = [];
  const newState = errorReducer(undefined, []);
  expect(newState).toEqual(initialState);
});

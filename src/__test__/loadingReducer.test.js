import loading from '../reducers/loading';

it('it handles loading reducer', () => {
  const initialState = true;
  const newState = loading(undefined, true);
  expect(newState).toEqual(initialState);
});

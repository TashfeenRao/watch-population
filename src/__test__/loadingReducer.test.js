import '@testing-library/react';
import loading from '../reducers/loading';

describe('Loading Reducer', () => {
  test('it handles loading reducer', () => {
    const initialState = true;
    const newState = loading(undefined, true);
    expect(newState).toEqual(initialState);
  });
});

import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import App from '../App';

describe('< App />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  test('renders app component ', () => {
    const app = shallow(<App />);
    expect(app.length).toEqual(1);
  });
});

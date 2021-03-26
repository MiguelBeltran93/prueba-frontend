import App from '../App';
import React from 'react';
import {createShallow} from '@material-ui/core/test-utils';




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

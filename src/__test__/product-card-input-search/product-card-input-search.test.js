import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import ProviderMock from '../../__mock__/ProviderMock';
import ProductCardSearch from '../../sections/product-card-input-search/product-card-input-search.component';

describe('<ProductCardSearch/>', () => {
  let wrapper;
  let mount;
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <ProviderMock>
        <ProductCardSearch />
      </ProviderMock>
    );
  });
  test('renders input component ', () => {
    const input = shallow(
      <ProviderMock>
        <ProductCardSearch />
      </ProviderMock>
    );
    expect(input.length).toEqual(1);
  });

  test('click search  IconButton ', () => {
    const button = wrapper.find(IconButton);
    expect(button).toHaveLength(1);
    button.simulate('click');
  });
  test('input  search', () => {
    const component = shallow(<ProductCardSearch />).dive();
    component.find(InputBase).simulate('change', {
      target: {
        value: 'Change function',
      },
    });
    expect(component).toBeTruthy();
  });
  test('keyPress search', () => {
    const component = shallow(<ProductCardSearch />).dive();
    component.find(InputBase).simulate('keyDown', { key: 'Enter' });
    expect(component).toBeTruthy();
  });
});

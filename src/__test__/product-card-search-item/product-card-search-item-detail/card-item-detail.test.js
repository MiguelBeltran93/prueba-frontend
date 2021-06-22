import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ProviderMock from '../../../__mock__/ProviderMock';
import CardItemDetail from '../../../sections/product-card-search-item/product-card-search-item-detail/card-item-detail.component';

describe('<CardItemDetail/>', () => {
  let mount;
  let shallow;
  const middlewares = [thunk];
  beforeAll(() => {
    shallow = createShallow();
  });
  beforeEach(() => {
    mount = createMount();
  });
  test('renders input component ', () => {
    const input = shallow(
      <ProviderMock>
        <CardItemDetail />
      </ProviderMock>
    ).dive();
    expect(input.length).toEqual(1);
  });
});

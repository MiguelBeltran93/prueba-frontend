import React from 'react';
import {createMount} from '@material-ui/core/test-utils';
import ProviderMock from '../../../__mock__/ProviderMock';
import {createShallow} from '@material-ui/core/test-utils';
import {CardItemDetail} from '../../../sections/product-card-search-item/product-card-search-item-detail/card-item-detail.component';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'

describe('<CardItemDetail/>', () => {

    let wrapper;
    let mount;
    let shallow;
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares)
    beforeAll(() => {
        shallow = createShallow();
    });
    beforeEach(() => {
        mount = createMount();
        wrapper = mount(<ProviderMock>
            <CardItemDetail/>
        </ProviderMock>);
    });
    test('renders input component ', () => {
        const input = shallow(
            <ProviderMock>
                <CardItemDetail/>
            </ProviderMock>
        ).dive();
        expect(input.length).toEqual(1);

    });


});
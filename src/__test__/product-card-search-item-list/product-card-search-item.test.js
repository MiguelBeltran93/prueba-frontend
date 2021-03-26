import React from 'react';
import {createMount} from '@material-ui/core/test-utils';
import ProviderMock from '../../__mock__/ProviderMock';
import {createShallow} from '@material-ui/core/test-utils';
import {CardSearchItemComponent} from '../../sections/product-card-search-item/product-card-search-item.component';

describe('<CardSearchItemComponent/>', () => {

    let wrapper;
    let mount;
    let shallow;
    beforeAll(() => {
        shallow = createShallow();
    });
    beforeEach(() => {
        mount = createMount();
        wrapper = mount(<ProviderMock>
            <CardSearchItemComponent/>
        </ProviderMock>);
    });
    test('renders input component ', () => {
        const input = shallow(
            <ProviderMock>
                <CardSearchItemComponent/>
            </ProviderMock>
        );
        expect(input.length).toEqual(1);

    });



});
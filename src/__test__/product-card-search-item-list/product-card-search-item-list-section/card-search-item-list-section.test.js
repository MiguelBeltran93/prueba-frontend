import React from 'react';
import {createMount} from '@material-ui/core/test-utils';
import ProviderMock from '../../../__mock__/ProviderMock';
import {createShallow} from '@material-ui/core/test-utils';
import {CardSearchItemListSection} from '../../../sections/product-card-search-item/product-card-search-item-list/product-card-search-item-list-section/card-search-item-list-section.component';


const props = {
    products: {
        items:  [
            {
                "id": "1",
                "title": "Pc Armada Cpu Amd Full Gamer A10-9700 16gb Ddr4 2400mhz 1080p Hdmi",
                "price": {
                    "currency": "$",
                    "amount": 5000,
                    "decimals": 88
                },
                "picture": "https://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg",
                "condition": "Nuevo",
                "free_shipping": true
            },
            {
                "id": "2",
                "title": "Pc Armada Cpu Amd Full Gamer A10-9700 16gb Ddr4 2400mhz 1080p Hdmi",
                "price": {
                    "currency": "$",
                    "amount": 5000,
                    "decimals": 88
                },
                "picture": "https://http2.mlstatic.com/D_856328-MLA42504174757_072020-I.jpg",
                "condition": "Nuevo",
                "free_shipping": true
            },
            {
                "id": "3",
                "title": "Pc Armada Cpu Amd Full Gamer A10-9700 16gb Ddr4 2400mhz 1080p Hdmi",
                "price": {
                    "currency": "$",
                    "amount": 5000,
                    "decimals": 88
                },
                "picture": "https://http2.mlstatic.com/D_833151-MLA44217226837_122020-I.jpg",
                "condition": "Nuevo",
                "free_shipping": true
            },
            {
                "id": "4",
                "title": "Pc Armada Cpu Amd Full Gamer A10-9700 16gb Ddr4 2400mhz 1080p Hdmi",
                "price": {
                    "currency": "$",
                    "amount": 5000,
                    "decimals": 88
                },
                "picture": "https://http2.mlstatic.com/D_835069-MLA44010979681_112020-I.jpg",
                "condition": "Nuevo",
                "free_shipping": true
            }
        ]
    }
};
describe('<CardSearchItemListSection/>', () => {

    let wrapper;
    let mount;
    let shallow;
    beforeAll(() => {
        shallow = createShallow();
    });
    beforeEach(() => {
        mount = createMount();
        wrapper = mount(<ProviderMock>
            <CardSearchItemListSection products={props}/>
        </ProviderMock>);
    });
    test('renders CardSearchItemListSection ', () => {
        const input = shallow(
            <ProviderMock>
                <CardSearchItemListSection products={props}/>
            </ProviderMock>
        );
        expect(input.length).toEqual(1);

    });

    test('CardMedia list', () => {
        const input = shallow(
            <ProviderMock>
                <CardSearchItemListSection products={props}/>
            </ProviderMock>
        ).dive();

    });


});
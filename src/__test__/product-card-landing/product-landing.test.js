import React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import {ProductLanding} from '../../sections/product-card-landing/product-landing.Component';




describe('< ProductLanding />', () => {

    let shallow;

    beforeAll(() => {
        shallow = createShallow();
    });

    test('renders ProductLanding component ', () => {
        const app = shallow(<ProductLanding />);
        expect(app.length).toEqual(1);
    });

});

import {productReducer} from '../../../../store/sections/product-card-input-search/product-card-input-search-reducers';

describe('Reducers', () => {
    test('Retornar initial State', () => {
        expect(productReducer({}, '')).toEqual({});
    });

    test('SAVE_SEARCH_ITEM', () => {
        const initialState = {
            itemSearch : '',
            itemDetail: '',
            productsList: [],
            productDetail:{}
        };
        const payload = '1234';
        const action = {
            type: 'SAVE_SEARCH_ITEM',
            payload,
        };
        const expected = {
            ...initialState,
            itemSearch: '1234',
        };
        expect(productReducer(initialState, action)).toEqual(expected);
    });

    test('SAVE_SEARCH_ITEM_DETAIL', () => {
        const state= {};
        expect(
            productReducer(state, {
                type: 'SAVE_SEARCH_ITEM_DETAIL',
                payload: 'Run the tests'
            })
        ).toEqual(
            {...state,
                itemDetail: 'Run the tests',
            }
        )

    });
});
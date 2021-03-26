import {
    addItemAsync, getProductListAction,
    saveItemSearchAction
} from '../../../../store/sections/product-card-input-search/product-card-input-search-actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
    new Promise((resolve, reject) => {
        setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
    });

describe('Actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({ phoneNumbers: [] });
    });

    test('addItemAsync Action', () => {
        const payload = 'algo';
        const expected = {
            type: 'SAVE_SEARCH_ITEM',
            payload,
        };
        expect(addItemAsync(payload, 'SAVE_SEARCH_ITEM')).toEqual(expected);
    });

    test('saveItemSearchAction Action', () => {
        const payload = 'algo';
        const expected = {
            type: 'SAVE_SEARCH_ITEM',
            payload,
        };
        expect(saveItemSearchAction(payload, 'SAVE_SEARCH_ITEM')).toBeTruthy();
    });

    test('getProductListAction Action', () => {
        store
            .dispatch(getProductListAction(11 ));
    });

});

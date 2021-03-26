import { getProductListService} from "../services/product.service";
import {formatToMoney} from "../sections/utils";


describe('utils', () => {
    test('formatToMoney valid value', () => {
        expect(formatToMoney('1000')).toEqual('1.000');
    });

    test('formatToMoney invalid value ', () => {
        expect(formatToMoney(false)).toEqual('0');
    });

});

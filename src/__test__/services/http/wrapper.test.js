import wrapperSuccessResponse from '../../../services/http/WrapperSuccessResponse';
import WrapperErrorResponse from '../../../services/http/WrapperErrorResponse';

describe('get data', () => {
    test('endPointSuccess', () => {
        expect(wrapperSuccessResponse({data: 'hola'})).toEqual('hola');
    });

    test('endPointError', () => {
        expect(WrapperErrorResponse({data: 'hola'})).toEqual({data: 'hola'});
    });
});


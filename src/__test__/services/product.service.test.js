import {
  getProductDetailService,
  getProductListService,
} from '../../services/product.service';

describe('services', () => {
  test('getProductListService', () => {
    getProductListService('');
  });

  test('getProductDetailService', () => {
    getProductDetailService('');
  });
});

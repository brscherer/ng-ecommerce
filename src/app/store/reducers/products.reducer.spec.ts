import { mockProduct } from './../../../testing/mocks';
import * as fromProducts from './products.reducer';
import * as fromActions from '../actions/products.actions';

describe('ProductsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromProducts;
      const action = { type: '' };
      const state = fromProducts.productsReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('[LOAD_PRODUCTS] action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromProducts;
      const action = fromActions.loadProducts();
      const state = fromProducts.productsReducer(initialState, action);

      expect(fromProducts.getProductsLoading(state)).toEqual(true);
      expect(fromProducts.getProductsLoaded(state)).toEqual(false);
      expect(fromProducts.getProductsEntities(state)).toEqual({});
      expect(fromProducts.getProductsError(state)).toEqual('');
    });
  });

  describe('[LOAD_PRODUCTS_FAIL] action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromProducts;
      const action = fromActions.loadProductsFail({ error: 'error' });
      const state = fromProducts.productsReducer(initialState, action);

      expect(fromProducts.getProductsLoading(state)).toEqual(false);
      expect(fromProducts.getProductsLoaded(state)).toEqual(true);
      expect(fromProducts.getProductsEntities(state)).toEqual({});
      expect(fromProducts.getProductsError(state)).toBe('error');
    });
  });

  describe('[LOAD_PRODUCTS_SUCCESS] action', () => {
    it('should set loading to true', () => {
      const expectedEntities = {
        [mockProduct.id]: mockProduct,
      };
      const { initialState } = fromProducts;
      const action = fromActions.loadProductsSuccess({ products: [mockProduct] });
      const state = fromProducts.productsReducer(initialState, action);

      expect(fromProducts.getProductsLoading(state)).toEqual(false);
      expect(fromProducts.getProductsLoaded(state)).toEqual(true);
      expect(fromProducts.getProductsEntities(state)).toEqual(expectedEntities);
      expect(fromProducts.getProductsError(state)).toBe('');
    });
  });
});

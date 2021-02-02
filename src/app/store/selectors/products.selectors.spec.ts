import { mockProduct } from './../../../testing/mocks';

import * as fromProducts from '../selectors/products.selectors';
import { ProductsState } from '../../shared/models/product.model';

describe('ProductsSelectors', () => {
  const initialState: ProductsState = {
    entities: { 1: mockProduct },
    loaded: false,
    loading: false,
    error: '',
  };

  it('should get products entities', () => {
    const state = fromProducts.getProductsEntities.projector(initialState);
    expect(state).toEqual(initialState.entities);
  });
  it('should get all products', () => {
    const state = fromProducts.getAllProducts.projector(initialState.entities);
    expect(state).toEqual([mockProduct]);
  });
  it('should get products loaded state value', () => {
    const state = fromProducts.getProductsLoaded.projector(initialState);
    expect(state).toEqual(false);
  });
  it('should get products loading state value', () => {
    const state = fromProducts.getProductsLoading.projector(initialState);
    expect(state).toEqual(false);
  });
  it('should get products error message', () => {
    const state = fromProducts.getProductsError.projector(initialState);
    expect(state).toEqual('');
  });
});

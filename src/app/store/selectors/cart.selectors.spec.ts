import { CartState } from './../../shared/models/cart.model';
import { mockProduct } from './../../../testing/mocks';

import * as fromCart from '../selectors/cart.selectors';

describe('CartSelectors', () => {
  const initialState: CartState = {
    entities: { 1: { ...mockProduct, quantity: 1, total: mockProduct.price } },
  };

  it('should get cart products entities', () => {
    const state = fromCart.getCartProducts.projector(initialState);
    expect(state).toEqual(initialState.entities);
  });

  it('should get cart products length', () => {
    const state = fromCart.getCartProductsLength.projector(initialState.entities);
    expect(state).toEqual(1);
  });

  it('should get cart products total value', () => {
    const state = fromCart.getCartProductsTotalValue.projector(initialState.entities);
    expect(state).toEqual(mockProduct.price);
  });
});

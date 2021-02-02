import { mockProduct } from './../../../testing/mocks';
import * as fromCart from './cart.reducer';
import * as fromActions from '../actions/cart.actions';

describe('CartReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromCart;
      const action = { type: '' };
      const state = fromCart.cartReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('[ADD_PRODUCT] action', () => {
    it('should add a product entity', () => {
      const entities = { [mockProduct.id]: { ...mockProduct, quantity: 1, total: mockProduct.price } };

      const { initialState } = fromCart;
      const action = fromActions.addProduct({ product: mockProduct });
      const state = fromCart.cartReducer(initialState, action);

      expect(state.entities).toEqual(entities);
    });

    it('should increase a product entity quantity by 1 if it already exists', () => {
      const entities = { [mockProduct.id]: { ...mockProduct, quantity: 1, total: mockProduct.price } };
      const expectedEntities = { [mockProduct.id]: { ...mockProduct, quantity: 2, total: mockProduct.price * 2 } };

      const { initialState } = fromCart;
      const action = fromActions.addProduct({ product: mockProduct });
      const state = fromCart.cartReducer({ ...initialState, entities }, action);

      expect(state.entities).toEqual(expectedEntities);
    });
  });

  describe('[REMOVE_PRODUCT] action', () => {
    it('should remove a product entity', () => {
      const entities = { [mockProduct.id]: { ...mockProduct, quantity: 1, total: mockProduct.price } };

      const { initialState } = fromCart;
      const action = fromActions.removeProduct({ productId: mockProduct.id });
      const state = fromCart.cartReducer({ ...initialState, entities }, action);

      expect(state.entities).toEqual(initialState.entities);
    });

    it('should return previous state if productId does not exist on entities', () => {
      const entities = { [mockProduct.id]: { ...mockProduct, quantity: 1, total: mockProduct.price } };

      const { initialState } = fromCart;
      const action = fromActions.removeProduct({ productId: '999' });
      const state = fromCart.cartReducer({ ...initialState, entities }, action);

      expect(state.entities).toEqual(entities);
    });
  });

  describe('[CHANGE_PRODUCT_QUANTITY] action', () => {
    it('should change a product quantity and update total price', () => {
      const entities = { [mockProduct.id]: { ...mockProduct, quantity: 1, total: mockProduct.price } };
      const expectedEntities = { [mockProduct.id]: { ...mockProduct, quantity: 5, total: mockProduct.price * 5 } };

      const { initialState } = fromCart;
      const action = fromActions.changeProductQuantity({ productId: mockProduct.id, quantity: 5 });
      const state = fromCart.cartReducer({ ...initialState, entities }, action);

      expect(state.entities).toEqual(expectedEntities);
    });

    it('should change a product quantity to 1 if passed 0 and update total price', () => {
      const entities = { [mockProduct.id]: { ...mockProduct, quantity: 5, total: mockProduct.price * 5 } };
      const expectedEntitientitieses = { [mockProduct.id]: { ...mockProduct, quantity: 1, total: mockProduct.price } };

      const { initialState } = fromCart;
      const action = fromActions.changeProductQuantity({ productId: mockProduct.id, quantity: 0 });
      const state = fromCart.cartReducer({ ...initialState, entities }, action);

      expect(state.entities).toEqual(expectedEntitientitieses);
    });

    it('should return previous state if productId does not exist on entities', () => {
      const entities = { [mockProduct.id]: { ...mockProduct, quantity: 1, total: mockProduct.price } };

      const { initialState } = fromCart;
      const action = fromActions.changeProductQuantity({ productId: '999', quantity: 5 });
      const state = fromCart.cartReducer({ ...initialState, entities }, action);

      expect(state.entities).toEqual(entities);
    });
  });
});

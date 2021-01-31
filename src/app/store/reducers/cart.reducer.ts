import { createReducer, on } from '@ngrx/store';

import * as CartAction from '../actions/cart.actions';
import { CartState } from '../../shared/models/cart.model';

export const initialState: CartState = {
  entities: {},
};

export const cartReducer = createReducer(
  initialState,
  on(CartAction.addProduct, (state, { product }) => ({
    ...state,
    entities: {
      ...state.entities,
      [product.id]: {
        ...product,
        quantity: state.entities[product.id]?.quantity ? state.entities[product.id].quantity + 1 : 1,
        total: state.entities[product.id]?.quantity
          ? (state.entities[product.id].quantity + 1) * product.price
          : product.price,
      },
    },
  })),
  on(CartAction.removeProduct, (state, { productId }) => {
    const newState = { ...state };
    delete newState.entities[productId];
    return newState;
  }),
);

export const getCartProducts = (state: CartState) => state.entities;

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
    const entities = Object.keys(state.entities).reduce((newEntities, entity) => {
      if (entity === productId) return newEntities;

      const copyEntity = state.entities[entity];

      return { ...newEntities, [copyEntity.id]: copyEntity };
    }, {});
    return { ...state, entities };
  }),
  on(CartAction.changeProductQuantity, (state, { productId, quantity }) => {
    const entities = Object.keys(state.entities).reduce(
      (newEntities, entity) => {
        if (entity !== productId) return newEntities;

        const copyEntity = state.entities[entity];

        return {
          ...newEntities,
          [copyEntity.id]: {
            ...copyEntity,
            quantity: quantity || 1,
            total: quantity ? quantity * state.entities[entity].price : state.entities[entity].price,
          },
        };
      },
      { ...state.entities },
    );
    return { ...state, entities };
  }),
);

export const getCartProducts = (state: CartState) => state.entities;

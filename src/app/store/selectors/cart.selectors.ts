import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCart from '../reducers/cart.reducer';

export const getCartProducts = createSelector((state: fromFeature.AppState) => state.cart, fromCart.getCartProducts);
export const getCartProductsLength = createSelector(getCartProducts, state => Object.keys(state).length);
export const getCartProductsTotalValue = createSelector(getCartProducts, state =>
  Object.keys(state).reduce((total, key) => total + state[key].total, 0),
);

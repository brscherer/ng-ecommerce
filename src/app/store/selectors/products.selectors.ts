import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

export const getProductsState = createSelector(
  fromFeature.getShowcaseState,
  (state: fromFeature.ShowcaseState) => state.products,
);

export const getProductsEntities = createSelector(getProductsState, fromProducts.getProductsEntities);
export const getAllProducts = createSelector(getProductsEntities, entities =>
  Object.keys(entities).map(id => entities[id]),
);
export const getProductsLoaded = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading = createSelector(getProductsState, fromProducts.getProductsLoading);
export const getProductsError = createSelector(getProductsState, fromProducts.getProductsError);

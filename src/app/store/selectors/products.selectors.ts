import { sortProducts } from './../actions/products.actions';
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromProducts from '../reducers/products.reducer';
import { dynamicSort } from '../../core/functions/dynamic-sort';

export const getProductsState = createSelector(
  fromFeature.getShowcaseState,
  (state: fromFeature.ShowcaseState) => state.products,
);

export const getProductsEntities = createSelector(getProductsState, fromProducts.getProductsEntities);
export const getProductsSort = createSelector(getProductsState, fromProducts.getProductsSortProperty);
export const getAllProducts = createSelector(getProductsEntities, getProductsSort, (entities, sortProperty) =>
  Object.keys(entities)
    .map(id => entities[id])
    .sort(dynamicSort(sortProperty)),
);
export const getProductsLoaded = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading = createSelector(getProductsState, fromProducts.getProductsLoading);
export const getProductsError = createSelector(getProductsState, fromProducts.getProductsError);

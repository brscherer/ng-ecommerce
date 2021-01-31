import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './products.reducer';

export interface ShowcaseState {
  products: fromProducts.ProductsState;
}

export const reducers: ActionReducerMap<ShowcaseState> = {
  products: fromProducts.productsReducer,
};

export const getShowcaseState = createFeatureSelector<ShowcaseState>('showcase');

export const getProductsState = createSelector(getShowcaseState, (state: ShowcaseState) => state.products);

export const getProductsEntities = createSelector(getProductsState, fromProducts.getProductsEntities);
export const getAllProducts = createSelector(getProductsEntities, entities =>
  Object.keys(entities).map(id => entities[id]),
);
export const getProductsLoaded = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading = createSelector(getProductsState, fromProducts.getProductsLoading);
export const getProductsError = createSelector(getProductsState, fromProducts.getProductsError);

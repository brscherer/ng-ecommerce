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

export const getAllProducts = createSelector(getProductsState, fromProducts.getProducts);
export const getProductsLoaded = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading = createSelector(getProductsState, fromProducts.getProductsLoading);
export const getProductsError = createSelector(getProductsState, fromProducts.getProductsError);

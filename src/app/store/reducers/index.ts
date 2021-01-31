import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './products.reducer';
import * as fromCart from './cart.reducer';
import { CartState } from '../../shared/models/cart.model';
import { ProductsState } from '../../shared/models/product.model';

export interface AppState {
  cart: CartState;
}
export interface ShowcaseState {
  products: ProductsState;
}

export const appState: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
};

export const showcaseReducers: ActionReducerMap<ShowcaseState> = {
  products: fromProducts.productsReducer,
};

/* Products Selectors */
export const getShowcaseState = createFeatureSelector<ShowcaseState>('showcase');

export const getProductsState = createSelector(getShowcaseState, (state: ShowcaseState) => state.products);

export const getProductsEntities = createSelector(getProductsState, fromProducts.getProductsEntities);
export const getAllProducts = createSelector(getProductsEntities, entities =>
  Object.keys(entities).map(id => entities[id]),
);
export const getProductsLoaded = createSelector(getProductsState, fromProducts.getProductsLoaded);
export const getProductsLoading = createSelector(getProductsState, fromProducts.getProductsLoading);
export const getProductsError = createSelector(getProductsState, fromProducts.getProductsError);

/* App Selectors */
export const getCartProducts = createSelector((state: AppState) => state.cart, fromCart.getCartProducts);
export const getCartProductsLength = createSelector(getCartProducts, state => Object.keys(state).length);

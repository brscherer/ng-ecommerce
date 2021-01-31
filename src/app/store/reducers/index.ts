import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from './cart.reducer';
import * as fromToasts from './toast.reducer';
import * as fromProducts from './products.reducer';
import { CartState } from '../../shared/models/cart.model';
import { ToastState } from '../../shared/models/toast.model';
import { ProductsState } from '../../shared/models/product.model';

export interface AppState {
  cart: CartState;
  toast: ToastState;
}
export interface ShowcaseState {
  products: ProductsState;
}

export const appState: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
  toast: fromToasts.toastReducer,
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

/* Cart Selectors */
export const getCartProducts = createSelector((state: AppState) => state.cart, fromCart.getCartProducts);
export const getCartProductsLength = createSelector(getCartProducts, state =>
  Object.keys(state).reduce((length, key) => length + state[key].quantity, 0),
);
export const getCartProductsTotalValue = createSelector(getCartProducts, state =>
  Object.keys(state).reduce((total, key) => total + state[key].total, 0),
);

/* Toast Selectors */
export const getToasts = createSelector((state: AppState) => state.toast, fromToasts.getToasts);

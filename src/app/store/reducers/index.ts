import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromCart from './cart.reducer';
import * as fromToasts from './toast.reducer';
import * as fromProducts from './products.reducer';
import { CartState } from '../../shared/models/cart.model';
import { ToastState } from '../../shared/models/toast.model';
import { ProductsState } from '../../shared/models/product.model';
import { RouterStateUrl } from '../../shared/models/router.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface AppState {
  cart: CartState;
  toast: ToastState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
export interface ShowcaseState {
  products: ProductsState;
}

export const appState: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
  toast: fromToasts.toastReducer,
  router: fromRouter.routerReducer,
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
export const getCartProductsLength = createSelector(getCartProducts, state => Object.keys(state).length);
export const getCartProductsTotalValue = createSelector(getCartProducts, state =>
  Object.keys(state).reduce((total, key) => total + state[key].total, 0),
);

/* Toast Selectors */
export const getToasts = createSelector((state: AppState) => state.toast, fromToasts.getToasts);

/* Router Selectors */
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');
export const { selectRouteData } = fromRouter.getSelectors(getRouterState);

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { title, metatags } = state.data;

    return {
      url,
      title: `NgEcommerce ${title ? `| ${title}` : ''}`,
      metatags: metatags ?? [],
    };
  }
}

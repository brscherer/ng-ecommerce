import { IProduct } from './../../shared/models/product.model';
import { createReducer, on } from '@ngrx/store';

import * as ProductsAction from '../actions/products.actions';

export interface ProductsState {
  data: ReadonlyArray<IProduct>;
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: ProductsState = {
  data: [],
  loaded: false,
  loading: false,
  error: '',
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsAction.loadProducts, state => ({ ...state, loading: true, error: '' })),
  on(ProductsAction.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    loaded: true,
    data: [...products],
  })),
  on(ProductsAction.loadProductsFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error,
  })),
);

export const getProducts = (state: ProductsState) => state.data;
export const getProductsLoading = (state: ProductsState) => state.loading;
export const getProductsLoaded = (state: ProductsState) => state.loaded;
export const getProductsError = (state: ProductsState) => state.error;

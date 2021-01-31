import { IProduct } from './../../shared/models/product.model';
import { createReducer, on } from '@ngrx/store';

import * as ProductsAction from '../actions/products.actions';

interface IProductEntities {
  [id: string]: IProduct;
}
export interface ProductsState {
  entities: IProductEntities;
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: ProductsState = {
  entities: {},
  loaded: false,
  loading: false,
  error: '',
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsAction.loadProducts, state => ({ ...state, loading: true, error: '' })),
  on(ProductsAction.loadProductsSuccess, (state, { products }) => {
    const entities: IProductEntities = products.reduce(
      (acc: IProductEntities, product) => {
        return {
          ...acc,
          [product.id]: product,
        };
      },
      {
        ...state.entities,
      },
    );

    return {
      ...state,
      loading: false,
      loaded: true,
      entities,
    };
  }),
  on(ProductsAction.loadProductsFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error,
  })),
);

export const getProductsEntities = (state: ProductsState) => state.entities;
export const getProductsLoading = (state: ProductsState) => state.loading;
export const getProductsLoaded = (state: ProductsState) => state.loaded;
export const getProductsError = (state: ProductsState) => state.error;

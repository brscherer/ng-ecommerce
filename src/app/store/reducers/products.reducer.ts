import { IProductEntities, ProductsState } from './../../shared/models/product.model';
import { createReducer, on } from '@ngrx/store';

import * as ProductsAction from '../actions/products.actions';

export const initialState: ProductsState = {
  entities: {},
  loaded: false,
  loading: false,
  error: '',
  sortProperty: 'name',
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsAction.loadProducts, state => ({ ...state, loading: true, loaded: false, error: '' })),
  on(ProductsAction.loadProductsSuccess, (state, { products }) => {
    const entities: IProductEntities = products.reduce(
      (acc: IProductEntities, product) => {
        return {
          ...acc,
          [product.id]: { ...product, price: Number(product.price) },
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
  on(ProductsAction.sortProducts, (state, { property }) => ({ ...state, sortProperty: property })),
);

export const getProductsEntities = (state: ProductsState) => state.entities;
export const getProductsLoading = (state: ProductsState) => state.loading;
export const getProductsLoaded = (state: ProductsState) => state.loaded;
export const getProductsError = (state: ProductsState) => state.error;
export const getProductsSortProperty = (state: ProductsState) => state.sortProperty;

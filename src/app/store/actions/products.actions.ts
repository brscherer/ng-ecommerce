import { IProduct } from './../../shared/models/product.model';
import { ProductsActionEnum } from './../../shared/enums/products-actions.enum';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(ProductsActionEnum.LOAD_PRODUCTS);

export const loadProductsFail = createAction(ProductsActionEnum.LOAD_PRODUCTS_FAIL, props<{ error: string }>());

export const loadProductsSuccess = createAction(
  ProductsActionEnum.LOAD_PRODUCTS_SUCCESS,
  props<{ products: IProduct[] }>(),
);

export const sortProducts = createAction(ProductsActionEnum.SORT_PRODUCTS, props<{ property: string }>());

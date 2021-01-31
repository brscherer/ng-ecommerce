import { IProduct } from './../../shared/models/product.model';
import { CartActionEnum } from './../../shared/enums/cart-actions.enum';
import { createAction, props } from '@ngrx/store';

export const addProduct = createAction(CartActionEnum.ADD_PRODUCT, props<{ product: IProduct }>());

export const removeProduct = createAction(CartActionEnum.REMOVE_PRODUCT, props<{ productId: string }>());

export const changeProductQuantity = createAction(
  CartActionEnum.CHANGE_PRODUCT_QUANTITY,
  props<{ productId: string; quantity: number }>(),
);

import { IProduct } from './product.model';

type ICartProduct = { quantity: number; total: number } & IProduct;

export interface ICartProductEntities {
  [id: string]: ICartProduct;
}

export interface CartState {
  entities: ICartProductEntities;
}

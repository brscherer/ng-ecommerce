import { IProduct } from './product.model';

// export interface ICartProduct extends IProduct {
//   quantity: number;
// }

type ICartProduct = { quantity: number; total: number } & IProduct;

export interface ICartProductEntities {
  [id: string]: ICartProduct;
}

export interface CartState {
  entities: ICartProductEntities;
}

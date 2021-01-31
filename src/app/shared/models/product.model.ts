export interface IProduct {
  id: string;
  name: string;
  price: string;
  photo: string;
}

export interface IProductEntities {
  [id: string]: IProduct;
}
export interface ProductsState {
  entities: IProductEntities;
  loaded: boolean;
  loading: boolean;
  error: string;
}

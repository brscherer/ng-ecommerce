export interface IProduct {
  id: string;
  name: string;
  price: number;
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
  sortProperty: string;
}

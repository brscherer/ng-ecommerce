import { getProductsLoading } from './../../../store/reducers/products.reducer';
import { IProduct } from './../../../shared/models/product.model';
import { CartActionEnum } from './../../../shared/enums/cart-actions.enum';
import { ProductsActionEnum } from './../../../shared/enums/products-actions.enum';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: Observable<IProduct[]> = this.store.select(fromStore.getAllProducts);
  selectedSort$: Observable<string> = this.store.select(fromStore.getProductsSort);
  loading$: Observable<boolean> = this.store.select(fromStore.getProductsLoading);

  constructor(@Inject(Store) private store: Store<fromStore.ShowcaseState>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: ProductsActionEnum.LOAD_PRODUCTS });
  }

  onAddToCart(product: IProduct): void {
    this.store.dispatch({ type: CartActionEnum.ADD_PRODUCT, product });
  }

  onChangeSort(property: string) {
    this.store.dispatch({ type: ProductsActionEnum.SORT_PRODUCTS, property });
  }
}

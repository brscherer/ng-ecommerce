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
  products$: Observable<ReadonlyArray<IProduct>> = this.store.select(fromStore.getAllProducts);

  constructor(@Inject(Store) private store: Store<fromStore.ShowcaseState>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: ProductsActionEnum.LOAD_PRODUCTS });
  }

  onAddToCart(product: IProduct): void {
    this.store.dispatch({ type: CartActionEnum.ADD_PRODUCT, product });
  }
}

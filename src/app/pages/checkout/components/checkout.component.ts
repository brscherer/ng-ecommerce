import { ICartProductEntities } from './../../../shared/models/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../../store';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  products$: Observable<ICartProductEntities> = this.store.select(fromStore.getCartProducts);
  productsLength$: Observable<number> = this.store.select(fromStore.getCartProductsLength);
  productsTotalValue$: Observable<number> = this.store.select(fromStore.getCartProductsTotalValue);

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {}
}

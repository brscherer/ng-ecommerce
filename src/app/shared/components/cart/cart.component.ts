import { ICartProductEntities } from './../../models/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Inject } from '@angular/core';

import * as fromStore from '../../../store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products$: Observable<ICartProductEntities> = this.store.select(fromStore.getCartProducts);
  productsLength$: Observable<number> = this.store.select(fromStore.getCartProductsLength);

  constructor(@Inject(Store) private store: Store<fromStore.AppState>) {}
}

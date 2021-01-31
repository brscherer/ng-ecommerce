import { CartActionEnum } from './../../../shared/enums/cart-actions.enum';
import { ICartProductEntities } from './../../../shared/models/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import * as fromStore from '../../../store';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  products$: Observable<ICartProductEntities> = this.store.select(fromStore.getCartProducts);
  productsLength$: Observable<number> = this.store.select(fromStore.getCartProductsLength);
  productsTotalValue$: Observable<number> = this.store.select(fromStore.getCartProductsTotalValue);

  constructor(private store: Store<fromStore.AppState>) {}

  onRemoveItem(productId: string) {
    this.store.dispatch({ type: CartActionEnum.REMOVE_PRODUCT, productId });
  }

  onChangeProductQuantity(quantity: string, productId: string) {
    this.store.dispatch({ type: CartActionEnum.CHANGE_PRODUCT_QUANTITY, productId, quantity: parseInt(quantity, 10) });
  }

  trackByProduct(index: number, item: any) {
    return item.id;
  }
}

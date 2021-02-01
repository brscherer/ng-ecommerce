import * as CartActions from './../actions/cart.actions';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';
import { ToastActionEnum } from '../../shared/enums/toast-actions.enum';

@Injectable()
export class CartEffects {
  onAddProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addProduct),
      map(() => ({
        type: ToastActionEnum.DISPLAY_SUCCESS,
        title: 'Product added to cart!',
        id: Date.now(),
      })),
    ),
  );

  constructor(@Inject(Actions) private actions$: Actions) {}
}

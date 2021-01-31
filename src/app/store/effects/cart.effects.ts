import * as CartActions from './../actions/cart.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastActionEnum } from '../../shared/enums/toast-actions.enum';

@Injectable()
export class CartEffects {
  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addProduct),
      map(() => ({
        type: ToastActionEnum.DISPLAY_SUCCESS,
        title: 'Product added to cart!',
        id: Date.now(),
      })),
    ),
  );

  constructor(private actions$: Actions) {}
}

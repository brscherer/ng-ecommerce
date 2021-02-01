import * as ToastActions from './../actions/toast.actions';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, delay } from 'rxjs/operators';
import { ToastActionEnum } from '../../shared/enums/toast-actions.enum';

@Injectable()
export class ToastEffects {
  onDisplaySuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToastActions.displaySuccess),
      delay(3000),
      map(toast => ({
        type: ToastActionEnum.REMOVE_TOAST,
        id: toast.id,
      })),
    ),
  );

  constructor(@Inject(Actions) private actions$: Actions) {}
}

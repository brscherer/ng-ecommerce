import * as ToastActions from './../actions/toast.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastActionEnum } from '../../shared/enums/toast-actions.enum';

@Injectable()
export class ToastEffects {
  displaySuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToastActions.displaySuccess),
      delay(3000),
      map(toast => ({
        type: ToastActionEnum.REMOVE_TOAST,
        id: toast.id,
      })),
    ),
  );

  constructor(private actions$: Actions) {}
}

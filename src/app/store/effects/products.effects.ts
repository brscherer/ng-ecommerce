import * as ProductActions from './../actions/products.actions';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from './../../core/services/products.service';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsActionEnum } from '../../shared/enums/products-actions.enum';

@Injectable()
export class ProductsEffects {
  onLoadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.service.getProducts().pipe(
          map(products => ({
            type: ProductsActionEnum.LOAD_PRODUCTS_SUCCESS,
            products,
          })),
          catchError(error =>
            of({
              type: ProductsActionEnum.LOAD_PRODUCTS_FAIL,
              error,
            }),
          ),
        ),
      ),
    ),
  );

  constructor(@Inject(Actions) private actions$: Actions, @Inject(ProductsService) private service: ProductsService) {}
}

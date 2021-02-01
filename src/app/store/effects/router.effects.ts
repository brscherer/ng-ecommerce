import { Title, Meta } from '@angular/platform-browser';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Inject, Injectable } from '@angular/core';

import * as fromRouter from '@ngrx/router-store';
import { tap } from 'rxjs/operators';
import { RouterNavigatedAction } from '@ngrx/router-store';
import { RouterStateUrl } from '../../shared/models/router.model';

@Injectable()
export class RouterEffects {
  onRouteChange$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<RouterNavigatedAction<RouterStateUrl>>(fromRouter.routerNavigatedAction),
        tap(({ payload: { routerState } }) => {
          this.titleService.setTitle(routerState.title);
          this.metaService.addTags([
            { name: 'keywords', content: 'Ecommerce, Marketplace, Angular, Ngrx, Glassmorphism, Products' },
            { name: 'robots', content: 'index, follow' },
          ]);

          routerState.metatags.forEach(tag => {
            this.metaService.updateTag(tag);
          });
        }),
      ),
    { dispatch: false },
  );

  constructor(
    @Inject(Actions) private actions$: Actions,
    @Inject(Title) private titleService: Title,
    @Inject(Meta) private metaService: Meta,
  ) {}
}

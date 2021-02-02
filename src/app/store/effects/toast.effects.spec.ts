import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import * as ToastActions from '../actions/toast.actions';
import { ToastActionEnum } from '../../shared/enums/toast-actions.enum';
import { ToastEffects } from '.';
import { ToastState } from '../../shared/models/toast.model';

describe('ToastEffects', () => {
  let actions$: Observable<any>;
  let effects: ToastEffects;
  let store: MockStore<ToastState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastEffects, provideMockActions(() => actions$), provideMockStore({})],
    });

    effects = TestBed.inject(ToastEffects);
    store = TestBed.inject(MockStore);
  });

  it('shoulde be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onDisplaySuccess$', () => {
    it('should dispatch remove toast action after 3 seconds', done => {
      const mockToastDispatch = {
        type: ToastActionEnum.REMOVE_TOAST,
        id: 1,
      };

      actions$ = of(ToastActions.displaySuccess({ title: 'Test', id: 1 }));

      effects.onDisplaySuccess$.subscribe(response => {
        expect(response).toEqual(mockToastDispatch);
        done();
      });
    });
  });
});

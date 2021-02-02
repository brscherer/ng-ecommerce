import { CartState } from './../../shared/models/cart.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CartEffects } from './cart.effects';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import * as CartActions from '../actions/cart.actions';
import { ToastActionEnum } from '../../shared/enums/toast-actions.enum';

describe('CartEffects', () => {
  let actions$: Observable<any>;
  let effects: CartEffects;
  let store: MockStore<CartState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartEffects, provideMockActions(() => actions$), provideMockStore({})],
    });

    effects = TestBed.inject(CartEffects);
    store = TestBed.inject(MockStore);
  });

  it('shoulde be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onAddProduct$', () => {
    it('should dispatch toast action when add product', done => {
      Date.now = jest.fn(() => 123456789);
      const mockToastDispatch = {
        type: ToastActionEnum.DISPLAY_SUCCESS,
        title: 'Product added to cart!',
        id: Date.now(),
      };

      actions$ = of(CartActions.addProduct);

      effects.onAddProduct$.subscribe(response => {
        expect(response).toEqual(mockToastDispatch);
        done();
      });
    });
  });
});

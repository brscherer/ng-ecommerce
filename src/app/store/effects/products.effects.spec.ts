import { mockProduct } from './../../../testing/mocks';
import { IProduct } from './../../shared/models/product.model';
import { ProductsService } from './../../core/services/products.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { ProductsState } from '../../shared/models/product.model';
import { ProductsEffects } from './products.effects';

import * as ProductActions from '../actions/products.actions';
import { ProductsActionEnum } from '../../shared/enums/products-actions.enum';

const mockProducts: IProduct[] = [mockProduct];

class MockProductsService {
  getProducts() {
    return of(mockProducts);
  }
}

describe('ProductsEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductsEffects;
  let store: MockStore<ProductsState>;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        provideMockActions(() => actions$),
        provideMockStore({}),
        { provide: ProductsService, useClass: MockProductsService },
      ],
    });

    effects = TestBed.inject(ProductsEffects);
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ProductsService);
  });

  it('shoulde be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onLoadProducts$', () => {
    it('should fetch products from service', done => {
      jest.spyOn(service, 'getProducts').mockReturnValue(of(mockProducts));
      const mockAction = {
        type: ProductsActionEnum.LOAD_PRODUCTS_SUCCESS,
        products: mockProducts,
      };

      actions$ = of(ProductActions.loadProducts);

      effects.onLoadProducts$.subscribe(response => {
        expect(response).toEqual(mockAction);
        expect(service.getProducts).toHaveBeenCalledTimes(1);
        done();
      });
    });

    it('should dispatch [LOAD_PRODUCTS_FAIL] if service returns error', done => {
      jest.spyOn(service, 'getProducts').mockImplementation(() => throwError('error'));
      const mockAction = {
        type: ProductsActionEnum.LOAD_PRODUCTS_FAIL,
        error: 'error',
      };

      actions$ = of(ProductActions.loadProducts);

      effects.onLoadProducts$.subscribe(response => {
        expect(response).toEqual(mockAction);
        expect(service.getProducts).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});

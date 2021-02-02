import { FormsModule } from '@angular/forms';
import { ShowcaseState } from './../../../store/reducers/index';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { mockProduct } from '../../../../testing/mocks';

import * as fromStore from '../../../store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let store: MockStore<ShowcaseState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule],
      providers: [provideMockStore({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch [ADD_PRODUCT] action when call [onAddToCart]', () => {
    component.onAddToCart(mockProduct);
    expect(store.dispatch).toHaveBeenLastCalledWith(fromStore.addProduct({ product: mockProduct }));
  });

  it('should dispatch [SORT_PRODUCT] action when call [onChangeSort]', () => {
    component.onChangeSort('price');
    expect(store.dispatch).toHaveBeenLastCalledWith(fromStore.sortProducts({ property: 'price' }));
  });
});

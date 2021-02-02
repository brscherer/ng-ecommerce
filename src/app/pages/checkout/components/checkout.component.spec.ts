import { changeProductQuantity } from './../../../store/actions/cart.actions';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CheckoutComponent } from './checkout.component';
import { AppState, removeProduct } from '../../../store';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [FormsModule],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.spyOn(store, 'dispatch').mockImplementation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch [REMOVE_PRODUCT] action when call [onRemoveItem]', () => {
    component.onRemoveItem('1');
    expect(store.dispatch).toHaveBeenLastCalledWith(removeProduct({ productId: '1' }));
  });

  it('should dispatch [CHANGE_PRODUCT_QUANTITY] action when call [onChangeProductQuantity]', () => {
    component.onChangeProductQuantity('5', '1');
    expect(store.dispatch).toHaveBeenLastCalledWith(changeProductQuantity({ productId: '1', quantity: 5 }));
  });

  it('should return id on [trackByProduct]', () => {
    expect(component.trackByProduct(1, { id: '2' })).toBe('2');
  });
});

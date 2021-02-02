import { ToastTypeEnum } from './../../shared/enums/toast-actions.enum';
import { initialState } from './products.reducer';
import { mockProduct } from './../../../testing/mocks';
import * as fromToast from './toast.reducer';
import * as fromActions from '../actions/toast.actions';

describe('ToastsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromToast;
      const action = { type: '' };
      const state = fromToast.toastReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('[DISPLAY_SUCCESS] action', () => {
    it('should append new toast message on list', () => {
      const mockToast = { title: 'Test toast', id: 1 };
      const { initialState } = fromToast;
      const action = fromActions.displaySuccess(mockToast);
      const state = fromToast.toastReducer(initialState, action);

      expect(state.list).toEqual([...initialState.list, { ...mockToast, type: ToastTypeEnum.SUCCESS }]);
    });
  });

  describe('[REMOVE_TOAST] action', () => {
    it('should remove toast from list by id', () => {
      const mockToast = { title: 'Test toast', id: 1, type: ToastTypeEnum.SUCCESS };
      const { initialState } = fromToast;
      const action = fromActions.removeToast({ id: mockToast.id });
      const state = fromToast.toastReducer({ ...initialState, list: [mockToast] }, action);

      expect(state.list).toEqual(initialState.list);
    });
  });
});

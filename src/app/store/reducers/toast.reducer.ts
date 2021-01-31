import { ToastTypeEnum } from './../../shared/enums/toast-actions.enum';
import { createReducer, on } from '@ngrx/store';

import * as ToastAction from '../actions/toast.actions';
import { ToastState } from '../../shared/models/toast.model';

export const initialState: ToastState = {
  list: [],
};

export const toastReducer = createReducer(
  initialState,
  on(ToastAction.displaySuccess, (state, { title, id }) => ({
    ...state,
    list: [...state.list, { id, title, type: ToastTypeEnum.SUCCESS }],
  })),
  on(ToastAction.removeToast, (state, { id }) => ({ ...state, list: state.list.filter(toast => toast.id !== id) })),
);

export const getToasts = (state: ToastState) => state.list;

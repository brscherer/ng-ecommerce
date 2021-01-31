import { createAction, props } from '@ngrx/store';
import { ToastActionEnum } from '../../shared/enums/toast-actions.enum';

export const displaySuccess = createAction(ToastActionEnum.DISPLAY_SUCCESS, props<{ title: string; id: number }>());
export const removeToast = createAction(ToastActionEnum.REMOVE_TOAST, props<{ id: number }>());

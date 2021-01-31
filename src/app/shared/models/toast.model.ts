import { ToastTypeEnum } from '../enums/toast-actions.enum';

export interface IToast {
  title: string;
  type: ToastTypeEnum;
  id: number;
}

export interface ToastState {
  list: ReadonlyArray<IToast>;
}

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../../store';
import { IToast } from '../../models/toast.model';

import { ToastTypeEnum } from '../../enums/toast-actions.enum';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  toasts$: Observable<ReadonlyArray<IToast>> = this.store.select(fromStore.getToasts);

  constructor(private store: Store<fromStore.AppState>) {}

  get toastType() {
    return ToastTypeEnum;
  }
}

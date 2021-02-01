import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromToasts from '../reducers/toast.reducer';

export const getToasts = createSelector((state: fromFeature.AppState) => state.toast, fromToasts.getToasts);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseContainerComponent } from '../../shared/components/base-container/base-container.component';
import { CheckoutComponent } from './components/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseContainerComponent,
    children: [
      {
        path: '',
        component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }

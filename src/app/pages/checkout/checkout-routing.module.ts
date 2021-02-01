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
        component: CheckoutComponent,
        data: {
          title: 'Checkout',
          metatags: [{ name: 'description', content: 'NgEcommerce Checkout Page - Review items from your cart' }],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}

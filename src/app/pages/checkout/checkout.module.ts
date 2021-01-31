import { FormsModule } from '@angular/forms';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout.component';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, FormsModule, SharedModule, CheckoutRoutingModule],
})
export class CheckoutModule {}

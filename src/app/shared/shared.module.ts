import { RouterModule } from '@angular/router';
import { BaseContainerComponent } from './components/base-container/base-container.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [HeaderComponent, BaseContainerComponent, CartComponent],
  exports: [HeaderComponent, BaseContainerComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

import { RouterModule } from '@angular/router';
import { BaseContainerComponent } from './components/base-container/base-container.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [HeaderComponent, BaseContainerComponent, CartComponent, ProductCardComponent],
  exports: [HeaderComponent, BaseContainerComponent, CartComponent, ProductCardComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}

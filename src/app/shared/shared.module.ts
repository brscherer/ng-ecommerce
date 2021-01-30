import { RouterModule } from '@angular/router';
import { BaseContainerComponent } from './components/base-container/base-container.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent, BaseContainerComponent],
  exports: [HeaderComponent, BaseContainerComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

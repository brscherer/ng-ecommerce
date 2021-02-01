import { HomeComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseContainerComponent } from '../../shared/components/base-container/base-container.component';

const routes: Routes = [
  {
    path: '',
    component: BaseContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          metatags: [
            { name: 'description', content: 'NgEcommerce Home Page - Browse for products in the best possible price!' },
          ],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

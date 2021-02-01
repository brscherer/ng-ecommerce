import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromStore from './store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(Store) private store: Store<fromStore.AppState>,
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit() {
    this.store
      .select(fromStore.getRouterState)
      .pipe(filter(routerState => !!routerState))
      .subscribe(routerState => {
        this.titleService.setTitle(routerState.state.title);
        this.metaService.addTags([
          { name: 'keywords', content: 'Ecommerce, Marketplace, Angular, Ngrx, Glassmorphism, Products' },
          { name: 'robots', content: 'index, follow' },
        ]);

        routerState.state.metatags.forEach(tag => {
          this.metaService.updateTag(tag);
        });
      });
  }
}

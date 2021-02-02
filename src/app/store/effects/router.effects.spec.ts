import { Title, Meta } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { RouterStateUrl } from './../../shared/models/router.model';
import { RouterEffects } from './router.effects';

import { ROUTER_NAVIGATED } from '@ngrx/router-store';

describe('RouterEffects', () => {
  let actions$: Observable<any>;
  let effects: RouterEffects;
  let store: MockStore<RouterStateUrl>;

  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterEffects, provideMockActions(() => actions$), provideMockStore({})],
    });

    effects = TestBed.inject(RouterEffects);
    store = TestBed.inject(MockStore);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  it('shoulde be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onRouteChange$', () => {
    it('should change title and metatags on navigated action', done => {
      jest.spyOn(titleService, 'setTitle').mockImplementation();
      jest.spyOn(metaService, 'addTags').mockImplementation();
      jest.spyOn(metaService, 'updateTag').mockImplementation();

      actions$ = of({
        type: ROUTER_NAVIGATED,
        payload: {
          routerState: {
            url: '/',
            title: 'Title test',
            metatags: [{ name: 'description', content: 'description test' }],
          },
        },
      });

      effects.onRouteChange$.subscribe(response => {
        expect(titleService.setTitle).toHaveBeenCalledWith('Title test');
        expect(metaService.addTags).toHaveBeenCalled();
        expect(metaService.updateTag).toHaveBeenCalledWith({ name: 'description', content: 'description test' });
        done();
      });
    });
  });
});

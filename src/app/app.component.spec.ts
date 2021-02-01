import { ToastComponent } from './shared/components/toast/toast.component';
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent, ToastComponent],
        providers: [provideMockStore({})],
      });

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    }),
  );

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});

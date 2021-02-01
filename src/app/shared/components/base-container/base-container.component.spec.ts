import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';

import { BaseContainerComponent } from './base-container.component';

describe('BaseContainerComponent', () => {
  let component: BaseContainerComponent;
  let fixture: ComponentFixture<BaseContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BaseContainerComponent, HeaderComponent],
        imports: [RouterTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

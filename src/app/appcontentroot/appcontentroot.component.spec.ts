import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcontentrootComponent } from './appcontentroot.component';

describe('AppcontentrootComponent', () => {
  let component: AppcontentrootComponent;
  let fixture: ComponentFixture<AppcontentrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcontentrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcontentrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

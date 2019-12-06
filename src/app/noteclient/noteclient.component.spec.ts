import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteclientComponent } from './noteclient.component';

describe('NoteclientComponent', () => {
  let component: NoteclientComponent;
  let fixture: ComponentFixture<NoteclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

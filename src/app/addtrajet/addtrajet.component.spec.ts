import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrajetComponent } from './addtrajet.component';

describe('AddtrajetComponent', () => {
  let component: AddtrajetComponent;
  let fixture: ComponentFixture<AddtrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

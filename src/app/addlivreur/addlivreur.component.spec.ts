import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlivreurComponent } from './addlivreur.component';

describe('AddlivreurComponent', () => {
  let component: AddlivreurComponent;
  let fixture: ComponentFixture<AddlivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrajetComponent } from './ajoutrajet.component';

describe('AjoutrajetComponent', () => {
  let component: AjoutrajetComponent;
  let fixture: ComponentFixture<AjoutrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

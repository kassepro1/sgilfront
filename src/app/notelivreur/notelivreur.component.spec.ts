import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotelivreurComponent } from './notelivreur.component';

describe('NotelivreurComponent', () => {
  let component: NotelivreurComponent;
  let fixture: ComponentFixture<NotelivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotelivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotelivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaFormComponent } from './pelicula-form.component';

describe('PeliculaFormComponent', () => {
  let component: PeliculaFormComponent;
  let fixture: ComponentFixture<PeliculaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteformularioComponent } from './componenteformulario.component';

describe('ComponenteformularioComponent', () => {
  let component: ComponenteformularioComponent;
  let fixture: ComponentFixture<ComponenteformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

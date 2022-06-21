import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioLetrasComponent } from './cambio-letras.component';

describe('CambioLetrasComponent', () => {
  let component: CambioLetrasComponent;
  let fixture: ComponentFixture<CambioLetrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioLetrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioLetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

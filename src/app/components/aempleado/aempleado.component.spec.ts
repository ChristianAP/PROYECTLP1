import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AempleadoComponent } from './aempleado.component';

describe('AempleadoComponent', () => {
  let component: AempleadoComponent;
  let fixture: ComponentFixture<AempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

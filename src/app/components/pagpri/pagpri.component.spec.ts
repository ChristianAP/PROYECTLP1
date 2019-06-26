import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagpriComponent } from './pagpri.component';

describe('PagpriComponent', () => {
  let component: PagpriComponent;
  let fixture: ComponentFixture<PagpriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagpriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagpriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupriComponent } from './menupri.component';

describe('MenupriComponent', () => {
  let component: MenupriComponent;
  let fixture: ComponentFixture<MenupriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenupriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

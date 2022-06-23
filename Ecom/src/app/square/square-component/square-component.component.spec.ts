import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponentComponent } from './square-component.component';

describe('SquareComponentComponent', () => {
  let component: SquareComponentComponent;
  let fixture: ComponentFixture<SquareComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

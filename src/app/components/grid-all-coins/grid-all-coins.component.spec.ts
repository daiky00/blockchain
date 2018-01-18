import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAllCoinsComponent } from './grid-all-coins.component';

describe('GridAllCoinsComponent', () => {
  let component: GridAllCoinsComponent;
  let fixture: ComponentFixture<GridAllCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAllCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAllCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

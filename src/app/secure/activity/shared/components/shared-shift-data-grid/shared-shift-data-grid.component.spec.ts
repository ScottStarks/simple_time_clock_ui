import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedShiftDataGridComponent } from './shared-shift-data-grid.component';

describe('SharedShiftDataGridComponent', () => {
  let component: SharedShiftDataGridComponent;
  let fixture: ComponentFixture<SharedShiftDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedShiftDataGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedShiftDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

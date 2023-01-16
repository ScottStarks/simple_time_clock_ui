import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingShiftComponent } from './working-shift.component';

describe('WorkingShiftComponent', () => {
  let component: WorkingShiftComponent;
  let fixture: ComponentFixture<WorkingShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingShiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

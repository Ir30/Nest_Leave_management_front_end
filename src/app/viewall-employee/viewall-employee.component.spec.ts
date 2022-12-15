import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallEmployeeComponent } from './viewall-employee.component';

describe('ViewallEmployeeComponent', () => {
  let component: ViewallEmployeeComponent;
  let fixture: ComponentFixture<ViewallEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

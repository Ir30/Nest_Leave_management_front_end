import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistorLogEntryComponent } from './vistor-log-entry.component';

describe('VistorLogEntryComponent', () => {
  let component: VistorLogEntryComponent;
  let fixture: ComponentFixture<VistorLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistorLogEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistorLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

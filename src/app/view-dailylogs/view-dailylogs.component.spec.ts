import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailylogsComponent } from './view-dailylogs.component';

describe('ViewDailylogsComponent', () => {
  let component: ViewDailylogsComponent;
  let fixture: ComponentFixture<ViewDailylogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDailylogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDailylogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

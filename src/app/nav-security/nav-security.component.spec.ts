import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSecurityComponent } from './nav-security.component';

describe('NavSecurityComponent', () => {
  let component: NavSecurityComponent;
  let fixture: ComponentFixture<NavSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitReportComponent } from './orbit-report.component';

describe('OrbitReportComponent', () => {
  let component: OrbitReportComponent;
  let fixture: ComponentFixture<OrbitReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

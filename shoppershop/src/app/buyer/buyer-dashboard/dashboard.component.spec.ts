import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: BuyerDashboardComponent;
  let fixture: ComponentFixture<BuyerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

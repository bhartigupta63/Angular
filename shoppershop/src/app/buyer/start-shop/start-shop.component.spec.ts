import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartShopComponent } from './start-shop.component';

describe('StartShopComponent', () => {
  let component: StartShopComponent;
  let fixture: ComponentFixture<StartShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

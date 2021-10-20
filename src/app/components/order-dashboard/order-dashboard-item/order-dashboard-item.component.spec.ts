import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDashboardItemComponent } from './order-dashboard-item.component';

describe('OrderDashboardItemComponent', () => {
  let component: OrderDashboardItemComponent;
  let fixture: ComponentFixture<OrderDashboardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDashboardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDashboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

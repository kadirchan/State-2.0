import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTrafficTicketComponent } from './pay-traffic-ticket.component';

describe('PayTrafficTicketComponent', () => {
  let component: PayTrafficTicketComponent;
  let fixture: ComponentFixture<PayTrafficTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayTrafficTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayTrafficTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

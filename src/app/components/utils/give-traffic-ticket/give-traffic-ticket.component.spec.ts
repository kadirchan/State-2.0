import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveTrafficTicketComponent } from './give-traffic-ticket.component';

describe('GiveTrafficTicketComponent', () => {
  let component: GiveTrafficTicketComponent;
  let fixture: ComponentFixture<GiveTrafficTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveTrafficTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveTrafficTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantPanelComponent } from './accountant-panel.component';

describe('AccountantPanelComponent', () => {
  let component: AccountantPanelComponent;
  let fixture: ComponentFixture<AccountantPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

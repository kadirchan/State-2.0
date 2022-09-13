import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentPanelComponent } from './president-panel.component';

describe('PresidentPanelComponent', () => {
  let component: PresidentPanelComponent;
  let fixture: ComponentFixture<PresidentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

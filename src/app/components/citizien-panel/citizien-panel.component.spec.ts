import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizienPanelComponent } from './citizien-panel.component';

describe('CitizienPanelComponent', () => {
  let component: CitizienPanelComponent;
  let fixture: ComponentFixture<CitizienPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizienPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizienPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

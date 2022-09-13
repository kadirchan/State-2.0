import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCitizienPanelComponent } from './non-citizien-panel.component';

describe('NonCitizienPanelComponent', () => {
  let component: NonCitizienPanelComponent;
  let fixture: ComponentFixture<NonCitizienPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonCitizienPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonCitizienPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

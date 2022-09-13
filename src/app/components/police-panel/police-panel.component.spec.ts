import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicePanelComponent } from './police-panel.component';

describe('PolicePanelComponent', () => {
  let component: PolicePanelComponent;
  let fixture: ComponentFixture<PolicePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

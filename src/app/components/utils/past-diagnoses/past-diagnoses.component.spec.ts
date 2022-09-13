import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDiagnosesComponent } from './past-diagnoses.component';

describe('PastDiagnosesComponent', () => {
  let component: PastDiagnosesComponent;
  let fixture: ComponentFixture<PastDiagnosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastDiagnosesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

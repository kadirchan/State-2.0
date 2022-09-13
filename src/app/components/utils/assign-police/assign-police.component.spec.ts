import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPoliceComponent } from './assign-police.component';

describe('AssignPoliceComponent', () => {
  let component: AssignPoliceComponent;
  let fixture: ComponentFixture<AssignPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPoliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

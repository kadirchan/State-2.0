import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAccountantComponent } from './assign-accountant.component';

describe('AssignAccountantComponent', () => {
  let component: AssignAccountantComponent;
  let fixture: ComponentFixture<AssignAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAccountantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

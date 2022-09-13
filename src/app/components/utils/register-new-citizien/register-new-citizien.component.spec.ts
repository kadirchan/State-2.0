import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewCitizienComponent } from './register-new-citizien.component';

describe('RegisterNewCitizienComponent', () => {
  let component: RegisterNewCitizienComponent;
  let fixture: ComponentFixture<RegisterNewCitizienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNewCitizienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNewCitizienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

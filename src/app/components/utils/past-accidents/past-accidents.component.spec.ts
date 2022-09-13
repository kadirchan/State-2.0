import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastAccidentsComponent } from './past-accidents.component';

describe('PastAccidentsComponent', () => {
  let component: PastAccidentsComponent;
  let fixture: ComponentFixture<PastAccidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastAccidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastAccidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

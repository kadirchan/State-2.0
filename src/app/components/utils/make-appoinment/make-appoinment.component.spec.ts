import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAppoinmentComponent } from './make-appoinment.component';

describe('MakeAppoinmentComponent', () => {
  let component: MakeAppoinmentComponent;
  let fixture: ComponentFixture<MakeAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAppoinmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

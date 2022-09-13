import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPresidentComponent } from './transfer-president.component';

describe('TransferPresidentComponent', () => {
  let component: TransferPresidentComponent;
  let fixture: ComponentFixture<TransferPresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferPresidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

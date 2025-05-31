import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfeedbacksComponent } from './myfeedbacks.component';

describe('MyfeedbacksComponent', () => {
  let component: MyfeedbacksComponent;
  let fixture: ComponentFixture<MyfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyfeedbacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

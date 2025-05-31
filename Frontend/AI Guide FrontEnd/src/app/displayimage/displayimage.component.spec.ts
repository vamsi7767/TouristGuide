import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayimageComponent } from './displayimage.component';

describe('DisplayimageComponent', () => {
  let component: DisplayimageComponent;
  let fixture: ComponentFixture<DisplayimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

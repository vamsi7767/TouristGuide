import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertripsComponent } from './usertrips.component';

describe('UsertripsComponent', () => {
  let component: UsertripsComponent;
  let fixture: ComponentFixture<UsertripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsertripsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsertripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

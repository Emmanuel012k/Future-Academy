import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherRegisterComponent } from './fresher-register.component';

describe('FresherRegisterComponent', () => {
  let component: FresherRegisterComponent;
  let fixture: ComponentFixture<FresherRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FresherRegisterComponent]
    });
    fixture = TestBed.createComponent(FresherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

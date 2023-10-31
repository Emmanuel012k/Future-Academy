import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceRegisterComponent } from './experience-register.component';

describe('ExperienceRegisterComponent', () => {
  let component: ExperienceRegisterComponent;
  let fixture: ComponentFixture<ExperienceRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceRegisterComponent]
    });
    fixture = TestBed.createComponent(ExperienceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

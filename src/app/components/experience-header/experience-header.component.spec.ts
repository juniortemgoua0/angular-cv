import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHeaderComponent } from './experience-header.component';

describe('ExperienceHeaderComponent', () => {
  let component: ExperienceHeaderComponent;
  let fixture: ComponentFixture<ExperienceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

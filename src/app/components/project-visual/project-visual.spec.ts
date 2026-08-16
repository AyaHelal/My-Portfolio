import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVisual } from './project-visual';

describe('ProjectVisual', () => {
  let component: ProjectVisual;
  let fixture: ComponentFixture<ProjectVisual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectVisual],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectVisual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyModal } from './case-study-modal';

describe('CaseStudyModal', () => {
  let component: CaseStudyModal;
  let fixture: ComponentFixture<CaseStudyModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudyModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

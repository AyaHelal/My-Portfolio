import { Component, HostListener, signal } from '@angular/core';
import { LucideArrowUpRight } from '@lucide/angular';
import { Project, projects } from '../../data/portfolio.content';
import { CaseStudyModal } from '../case-study-modal/case-study-modal';
import { ProjectVisual } from '../project-visual/project-visual';
import {AnimateOnScroll} from '../../shared/animate-on-scroll';

@Component({
  selector: 'app-projects-section',
  imports: [LucideArrowUpRight, CaseStudyModal, ProjectVisual,AnimateOnScroll],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {
    readonly projects = projects;
    readonly selectedProject = signal<Project | null>(null);

    @HostListener('window:keydown', ['$event'])
    onKeydown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        this.selectedProject.set(null);
      }
    }

    openCaseStudy(project: Project): void {
      this.selectedProject.set(project);
    }

    closeCaseStudy(): void {
      this.selectedProject.set(null);
    }
}

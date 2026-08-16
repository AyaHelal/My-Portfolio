import { Component } from '@angular/core';
import { LucideCheck } from '@lucide/angular';
import { certifications } from '../../data/portfolio.content';
import {AnimateOnScroll} from '../../shared/animate-on-scroll';

@Component({
  selector: 'app-learning-section',
  imports: [LucideCheck,AnimateOnScroll],
  templateUrl: './learning-section.html',
  styleUrl: './learning-section.css',
})
export class LearningSection {
  readonly certifications = certifications;
}

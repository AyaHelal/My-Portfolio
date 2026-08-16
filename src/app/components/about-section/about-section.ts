import { Component } from '@angular/core';
import {
  LucideBriefcaseBusiness,
  LucideCode2,
  LucideGraduationCap,
  LucideMapPin,
  LucideQuote,
} from '@lucide/angular';
import { personal } from '../../data/portfolio.content';
import {AnimateOnScroll} from '../../shared/animate-on-scroll';

@Component({
  selector: 'app-about-section',
  imports: [
    LucideBriefcaseBusiness,
    LucideCode2,
    LucideGraduationCap,
    LucideMapPin,
    LucideQuote,
    AnimateOnScroll
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  readonly personal = personal;
}

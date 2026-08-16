import { Component } from '@angular/core';
import { AboutSection } from '../../components/about-section/about-section';
import { ContactSection } from '../../components/contact-section/contact-section';
import { HeroSection } from '../../components/hero-section/hero-section';
import { LearningSection } from '../../components/learning-section/learning-section';
import { ProjectsSection } from '../../components/projects-section/projects-section';
import { SiteFooter } from '../../components/site-footer/site-footer';
import { SiteHeader } from '../../components/site-header/site-header';
import { SkillsSection } from '../../components/skills-section/skills-section';
import { BackToTop } from '../../components/back-to-top/back-to-top';

@Component({
  selector: 'app-home',
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    LearningSection,
    ContactSection,
    SiteFooter,
    BackToTop,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

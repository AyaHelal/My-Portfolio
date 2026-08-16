import { Component ,signal} from '@angular/core';
import {
  LucideArrowDownRight,
  LucideSparkles,
} from '@lucide/angular';import {  personal } from '../../data/portfolio.content';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [LucideArrowDownRight, LucideSparkles, RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly personal = personal;
  readonly imageError = signal(false);

  onImageError(): void {
    this.imageError.set(true);
  }
}

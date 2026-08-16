import { Component } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideExternalLink,
} from '@lucide/angular';
import {AnimateOnScroll} from '../../shared/animate-on-scroll';


@Component({
  selector: 'app-contact-section',
  imports: [
    LucideArrowUpRight,
    LucideExternalLink,
    AnimateOnScroll
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {}

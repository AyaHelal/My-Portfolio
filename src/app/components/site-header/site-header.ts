import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideArrowUpRight,
  LucideMenu,
  LucideX,
} from '@lucide/angular';
import { BrandMark } from '../brand-mark/brand-mark';
import { Theme } from '../../services/theme';


@Component({
  selector: 'app-site-header',
  imports: [RouterLink, BrandMark, LucideArrowRight, LucideArrowUpRight, LucideMenu, LucideX],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
    readonly menuOpen = signal(false);
    themeService= inject(Theme)

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.menuOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  handleNav(): void {
    this.menuOpen.set(false);
  }
}

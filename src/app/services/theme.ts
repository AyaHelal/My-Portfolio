import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  readonly isDark = signal(
    localStorage.getItem('theme') !== 'light'
  );

  constructor() {
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDark.update((dark) => !dark);
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.classList.toggle(
      'light',
      !this.isDark()
    );

    localStorage.setItem(
      'theme',
      this.isDark() ? 'dark' : 'light'
    );
  }
}
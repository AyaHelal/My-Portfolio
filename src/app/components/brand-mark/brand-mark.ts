import { Component , input , signal } from '@angular/core';

@Component({
  selector: 'app-brand-mark',
  imports: [],
  templateUrl: './brand-mark.html',
  styleUrl: './brand-mark.css',
})
export class BrandMark {
  readonly size = input<'sm' | 'md'>('md');

  readonly logoError = signal(false);

  onLogoError(): void {
    this.logoError.set(true);
  }
}

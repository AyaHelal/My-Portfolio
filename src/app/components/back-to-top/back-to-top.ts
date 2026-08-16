import { Component , HostListener, signal} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
})
export class BackToTop {
  readonly showButton = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.showButton.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandMark } from '../brand-mark/brand-mark';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, BrandMark],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  readonly year = new Date().getFullYear();
}

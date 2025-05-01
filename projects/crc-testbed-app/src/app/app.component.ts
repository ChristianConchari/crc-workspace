import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CrcSideMenuComponent, TitleColor } from 'crc-side-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrcSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crc-testbed-app';
  titleColor = TitleColor.blue;
  isAuthenticated = signal(false);
}

import { Component, input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-crc-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './crc-side-menu.component.html',
  styles: ``,
})
export class CrcSideMenuComponent {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);

  onSignOut = output();
  onSignIn = output();
}

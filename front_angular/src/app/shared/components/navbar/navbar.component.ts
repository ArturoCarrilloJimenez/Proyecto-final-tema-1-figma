import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'shared-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public menuItems = routes.filter((route) => route.path !== '**' && route.path !== 'login' && route.path !== 'register');

  constructor() {}
}

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'class',
    title: 'Class',
    loadComponent: () =>
      import('./pages/class/class.component').then((m) => m.ClassComponent),
  },
  {
    path: 'event',
    title: 'Event',
    loadComponent: () =>
      import('./pages/events/events.component').then((m) => m.EventsComponent),
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () =>
      import('./pages/contacts/contacts.component').then(
        (m) => m.ContactsComponent
      ),
  },
  {
    path: 'shop',
    title: 'Shop',
    loadComponent: () =>
      import('./pages/shop/shop.component').then((m) => m.ShopComponent),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./auth/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: () =>
      import('./auth/pages/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

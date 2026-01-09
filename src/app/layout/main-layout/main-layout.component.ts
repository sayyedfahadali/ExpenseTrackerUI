import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from '../../navbar/navbar-component.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavbarComponentComponent],
  template: `
    <app-navbar-component></app-navbar-component>
    <router-outlet></router-outlet>
  `,
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}

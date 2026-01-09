import { Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { ExpenseTableComponent } from './expenseTable/expenseTable.component';
import { AboutComponent } from './about/about.component';
import { EditRemoveColumnComponent } from './edit-remove-column/edit-remove-column.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.gaurd';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponentComponent } from './navbar/navbar-component.component';

export const routes: Routes = [
  // Default route redirects to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Routes without the navbar
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Routes with the navbar
  {
    path: '',
    component: MainLayoutComponent, // Wrap routes with the navbar
    children: [
      { path: 'home', component: ExpenseTableComponent },
      { path: 'add', component: AddexpenseComponent },
      { path: 'about', component: AboutComponent },
      { path: 'add-remove', component: EditRemoveColumnComponent },
      { path: 'navbar', component: NavbarComponentComponent },
    ],
  },

  // Redirect unknown routes to login
  { path: '**', redirectTo: 'login' },
];

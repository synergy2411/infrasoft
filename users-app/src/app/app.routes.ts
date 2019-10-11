import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';

export const APP_ROUTES : Routes = [{
  path :'',
  redirectTo : '/users',
  pathMatch : 'full'
},{
  path : 'users',             // http://localhost:4200/users
  component : UsersComponent
}, {
  path : 'about',             // http://localhost:4200/about
  component : AboutComponent
},{
  path : 'contact',           // http://localhost:4200/contact
  component : ContactUsComponent
},{
  path : 'employee',
  component : NewEmployeeComponent
},{
  path : 'lazy',
  loadChildren : './lazy/lazy.module#LazyModule'           // path/of/module/ModuleFileName#ModuleClassName
},{
  path : '**',                // http://localhost:4200/path/not/exist
  redirectTo : '/users',
  pathMatch : 'full'
}]

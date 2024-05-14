import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';

export const routes: Routes = [
    {path: 'about', component:AboutComponent},
    {path: 'authorization', component:AuthorizationComponent}
];

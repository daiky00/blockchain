import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'about', component: AboutComponent, data: { title: 'About' } },
    { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } }
  ];


import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'CryptoCurrencies', subTitle: 'Real-Time Coin Prices, Historical Charts and Crypto Market Cap' } },
    { path: 'about', component: AboutComponent, data: { title: 'About', subTitle: 'About the project and testing my abilities' } },
    { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found', subTitle: 'Opps looks like something went wrong or you are in the wrong link' } }
  ];


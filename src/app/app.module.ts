import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router dependencies 
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { PageTitleComponent } from './components/page-title/page-title.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

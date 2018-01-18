import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Router dependencies 
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

// shared services
import { CoinsService } from './shared/services/coins.service';
// containers
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

// main app component
import { AppComponent } from './app.component';

// components
import { HeaderComponent } from './components/header/header.component';
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
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

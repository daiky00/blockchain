import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//dependency of sparklin
import 'hammerjs';

// Router dependencies 
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

// shared pipes
import { TrimPipe } from './shared/pipes/trim.pipe';

// shared services
import { CoinsService } from './shared/services/coins.service';

// containers
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

// main app component
import { AppComponent } from './app.component';

// Kendo Components

import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';

// components
import { HeaderComponent } from './components/header/header.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { GridAllCoinsComponent } from './components/grid-all-coins/grid-all-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    PageTitleComponent,
    GridAllCoinsComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    GridModule,
    ChartsModule,
    InputsModule,
    BrowserAnimationsModule
  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RestCountriesService } from 'src/app/country-app/rest-countries.service';
import { CountryAppComponent } from 'src/app/country-app/country-app.component';
import { CountryCardComponent } from 'src/app/country-app/country-card/country-card.component';
import { CountryDirectoryComponent } from 'src/app/country-app/country-directory/country-directory.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountryAppComponent,
    CountryCardComponent,
    CountryDirectoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    RestCountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

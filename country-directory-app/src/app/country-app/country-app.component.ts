import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from 'src/app/country-app/rest-countries.service';
import { Country } from 'src/app/country-app/country.model';

@Component({
  selector: 'app-country-app',
  templateUrl: './country-app.component.html',
  styleUrls: ['./country-app.component.css']
})
export class CountryAppComponent implements OnInit {

  loading: boolean;
  error: string;
  allCountriesList: Array<Country> = [];
  countriesList: Array<Country> = [];
  showFilter: boolean;
  pageSize: number;
  countryNameInput: string;
  selectedRegion: string;

  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private restCountriesService: RestCountriesService) { }

  ngOnInit() {
    this.getAllCountries();
    this.pageSize = 10;
    this.showFilter = false;
  }

  getAllCountries() {
    this.loading = true;
    this.restCountriesService.getAllCountries().subscribe(
      countries => {
        this.allCountriesList = countries;
        this.countriesList = countries;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  filterByName() {
    let tempCountriesList = this.allCountriesList;
    if (this.countryNameInput !== undefined) {
      this.countriesList = tempCountriesList.filter(
        country => country.name.toUpperCase().indexOf(this.countryNameInput.toUpperCase()) !== -1
      );
    }
  }

  filterByRegion() {
    this.loading = true;
    this.restCountriesService.getCountryByRegion(this.selectedRegion).subscribe(
      countries => {
        this.countriesList = countries;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

}

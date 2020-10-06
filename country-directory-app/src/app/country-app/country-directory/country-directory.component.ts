import { Component, OnInit, Input } from '@angular/core';
import { RestCountriesService } from '../rest-countries.service';
import { Country } from '../country.model';


@Component({
  selector: 'app-country-directory',
  templateUrl: './country-directory.component.html',
  styleUrls: ['./country-directory.component.css']
})
export class CountryDirectoryComponent implements OnInit {

  @Input() countriesList: Array<Country>;
  @Input() pageSize: number;
  page: number;

  constructor() { }

  ngOnInit() {
    this.page = 1;
  }

}

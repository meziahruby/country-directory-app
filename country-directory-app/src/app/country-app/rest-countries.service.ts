import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class RestCountriesService {
  private restCountriesUrl = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  /**
   * Gets list of all countries from https://restcountries.eu/rest/v2/all
   */
  getAllCountries(): Observable<any> {
    return this.http.get(this.restCountriesUrl + 'all').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // /**
  //  * Gets details of a selected country from https://restcountries.eu/rest/v2/name/{name}
  //  * @param countryName native or partial name of the country
  //  */
  // getCountry(countryName: string) {
  //   return this.http.get(this.restCountriesUrl + 'name/' + countryName).pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   );
  // }

  /**
   * Gets list of countries + its details that belong to a given region
   * from https://restcountries.eu/rest/v2/region/{region}
   * @param regionName full name of the region
   */
  getCountryByRegion(regionName: string): Observable<any> {
    return this.http.get(this.restCountriesUrl + 'region/' + regionName).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) { // handle client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else { // handle server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

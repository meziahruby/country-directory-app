import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Country } from '../country.model';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  @Input() country: Country;
  modalRef: NgbModalRef;
  modalData: any;
  showTranslations = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openCountryDetails(templateRef: TemplateRef<any>, selectedCountry: Country) {
    this.modalData = selectedCountry;
    this.modalService.open(templateRef);
  }

  formatNumberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}

import { Component, OnInit } from '@angular/core';
import { HomeFormModel } from '../_models/HomeFormModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bothTypes = false;
  price = '£';
  isResult = false;
  quote: HomeFormModel;

  premium = [
    'Miele',
    'De Dietrich',
    'Kuppersbusch'
  ];

  fitted = [
    'Washing Machine',
    'Washer Dryer',
    'Dishwasher',
    'Microwave'
  ];

  nonFitted = [
    'Tumble Dryer',
    'Condenser Dryer',
    'Electric Oven',
    'Electric Cooker',
    'Extractor Hood',
  ];

  commercial = [
    'Commercial Microwave',
    'Commercial Dishwasher',
    'Commercial Oven'
  ];

  constructor() { }

  ngOnInit() {
  }

  quoteRequest(quote: HomeFormModel) {
    if (quote !== null) {
      this.resetPrice();
      this.calculateQuote(quote);
      this.quote = quote;
      this.isResult = true;
    }
  }

  calculateQuote(quote: HomeFormModel) {
    if (quote.applianceMake === 'Other') {
      quote.applianceMake = '';
    }

    if (quote.jobType === 'Repair') {
      if (this.fitted.includes(quote.applianceType)) {
        if (this.premium.includes(quote.applianceMake)) {
          this.price += '80';
          return;
        }
        if (quote.fitting === 'Integrated') {
          this.price += '70';
          return;
        }
        if (quote.fitting === 'Freestanding') {
          this.price += '60';
          return;
        }
      }
      if (this.nonFitted.includes(quote.applianceType)) {
        if (this.premium.includes(quote.applianceMake)) {
          this.price += '80';
          return;
        } else {
          this.price += '70';
          return;
        }
      }
      if (this.commercial.includes(quote.applianceType)) {
        this.price += '80';
        return;
      }
    }

    if (quote.jobType === 'Installation') {
      if (quote.fitting === 'Integrated') {
        this.price += '70';
        return;
      }
      if (quote.fitting === 'Freestanding') {
        this.price += '60';
        return;
      }
    }
  }

  resetPrice() {
    this.price = '£';
  }

  resetQuote() {
    this.isResult = false;
  }

  get quoteFitting() {
    if (this.quote.fitting !== null) {
      return this.quote.fitting;

    } else {
      return 'FAFDASF';
    }
  }

  get quoteApplianceType() {
    return this.quote.applianceType;
  }

  get quoteApplianceMake() {
    return this.quote.applianceMake;
  }

  get quoteJobType() {
    return this.quote.jobType;
  }
}

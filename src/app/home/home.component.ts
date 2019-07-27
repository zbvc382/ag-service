import { Component, OnInit } from '@angular/core';
import { HomeFormModel } from '../_models/HomeFormModel';
import { MetaService } from '../_services/meta.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

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
    'Range Cooker',
    'Fridge Freezer',
    'Fridge Freezer (American)'
  ];

  commercial = [
    'Commercial Microwave',
    'Commercial Dishwasher',
    'Commercial Oven'
  ];

  constructor(private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/');

    this.title.setTitle('Domestic & Commercial Appliance Repairs in London | A&G Appliances');
    this.meta.updateTag({
      name: 'description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Domestic & Commercial Appliance Repairs in London | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.ag-repairs.co.uk/'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Domestic & Commercial Appliance Repairs in London | A&G Appliances'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
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
          this.price += '65';
          return;
        }
        if (quote.fitting === 'Freestanding') {
          this.price += '60';
          return;
        }
      }
      if (this.nonFitted.includes(quote.applianceType)) {
        if (this.premium.includes(quote.applianceMake)) {
          if (quote.applianceType === 'Fridge Freezer (American)') {
            this.price += '85';
            return;
          } else {
            this.price += '80';
            return;
          }
        }
        if (quote.applianceType === 'Condenser Dryer') {
          this.price += '65';
          return;
        }
        if (quote.applianceType === 'Range Cooker') {
          this.price += '80';
          return;
        }
        if (quote.applianceType === 'Fridge Freezer') {
          this.price += '80';
          return;
        }
        if (quote.applianceType === 'Fridge Freezer (American)') {
          this.price += '85';
          return;
        } else {
          this.price += '60';
          return;
        }
      }
      if (this.commercial.includes(quote.applianceType)) {
        if (quote.applianceType === 'Commercial Microwave') {
          this.price += '75';
          return;
        } else {
          this.price += '80';
          return;
        }
      }
    }

    if (quote.jobType === 'Installation') {
      if (quote.fitting === 'Integrated') {
        this.price += '65';
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

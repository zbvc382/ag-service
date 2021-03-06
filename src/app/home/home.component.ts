import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeFormModel } from '../_models/HomeFormModel';
import { MetaService } from '../_services/meta.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('tab', { static: false }) totalEl: ElementRef<HTMLElement>;
  bothTypes = false;
  price = '£';
  isResult = false;
  quote: HomeFormModel;
  isInstallation = false;
  repairPrice: number;

  premium = [
    'Miele',
    'De Dietrich',
    'Kuppersbusch'
  ];

  fitted = [
    'Washing Machine',
    'Washer Dryer',
    'Dishwasher',
  ];

  nonFitted = [
    'Tumble Dryer',
    'Condenser Dryer',
    'Electric Oven',
    'Electric Cooker',
    'Extractor Hood',
    'Range Cooker',
    'Fridge Freezer',
    'Fridge Freezer (American)',
    'Microwave'
  ];

  commercial = [
    'Commercial Microwave',
    'Commercial Dishwasher',
  ];

  constructor(private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/');

    this.title.setTitle('Domestic & Commercial Appliance Repairs in London');
    this.meta.updateTag({
      name: 'description',
      content: 'A&G Appliances offers affordable domestic and commercial appliance repair service in South, East, West, Central, and North London.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Domestic & Commercial Appliance Repairs in London | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'A&G Appliances offers affordable domestic and commercial appliance repair service in South, East, West, Central, and North London.'
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
      content: 'A&G Appliances offers affordable domestic and commercial appliance repair service in South, East, West, Central, and North London.'
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
          this.setPrice('80');
          return;
        }
        if (quote.fitting === 'Integrated') {
          this.setPrice('65');
          return;
        }
        if (quote.fitting === 'Freestanding') {
          this.setPrice('60');
          return;
        }
      }
      if (this.nonFitted.includes(quote.applianceType)) {
        if (this.premium.includes(quote.applianceMake)) {
          if (quote.applianceType === 'Fridge Freezer (American)') {
            this.setPrice('85');
            return;
          } else {
            this.setPrice('80');
            return;
          }
        }
        if (quote.applianceType === 'Condenser Dryer') {
          this.setPrice('65');
          return;
        }
        if (quote.applianceType === 'Range Cooker') {
          this.setPrice('80');
          return;
        }
        if (quote.applianceType === 'Fridge Freezer') {
          this.setPrice('80');
          return;
        }
        if (quote.applianceType === 'Fridge Freezer (American)') {
          this.setPrice('85');
          return;
        } else {
          this.setPrice('60');
          return;
        }
      }
      if (this.commercial.includes(quote.applianceType)) {
        if (quote.applianceType === 'Commercial Microwave') {
          this.setPrice('70');
          return;
        } else {
          this.setPrice('80');
          return;
        }
      }
    }

    if (quote.jobType === 'Installation') {
      this.isInstallation = true;

      if (quote.fitting === 'Integrated') {
        this.setPrice('65');
        return;
      }
      if (quote.fitting === 'Freestanding') {
        this.setPrice('60');
        return;
      }
    }
  }

  setPrice(price: string) {
    this.price += price;
    this.repairPrice = +price - 35;
  }

  resetPrice() {
    this.price = '£';
  }

  resetQuote() {
    this.isResult = false;
    this.isInstallation = false;
    this.totalEl.nativeElement.scrollIntoView();
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

  settup() {
    this.totalEl.nativeElement.scrollIntoView();
  }
}

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
  qoute: HomeFormModel;

  premium = [
    'Miele',
    'Gaggenau',
    'De Dietrich',
    'Fisher & Paykel',
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

  qouteRequest(qoute: HomeFormModel) {
    if (qoute !== null) {
      this.resetPrice();
      this.calculateQoute(qoute);
      this.qoute = qoute;
      this.isResult = true;
    }
  }

  calculateQoute(qoute: HomeFormModel) {
    if (qoute.jobType === 'Repair') {
      if (this.fitted.includes(qoute.applianceType)) {
        if (this.premium.includes(qoute.applianceMake)) {
          this.price += '80';
          return;
        }
        if (qoute.fitting === 'Integrated') {
          this.price += '70';
          return;
        }
        if (qoute.fitting === 'Freestanding') {
          this.price += '60';
          return;
        }
      }
      if (this.nonFitted.includes(qoute.applianceType)) {
        if (this.premium.includes(qoute.applianceMake)) {
          this.price += '80';
          return;
        } else {
          this.price += '70';
          return;
        }
      }
      if (this.commercial.includes(qoute.applianceType)) {
        this.price += '80';
        return;
      }
    }

    if (qoute.jobType === 'Installation') {
      if (qoute.fitting === 'Integrated') {
        this.price += '70';
        return;
      }
      if (qoute.fitting === 'Freestanding') {
        this.price += '60';
        return;
      }
    }
  }

  resetPrice() {
    this.price = '£';
  }

  resetQoute() {
    this.isResult = false;
  }

  get qouteFitting() {
    if (this.qoute.fitting !== null) {
      return this.qoute.fitting;

    } else {
      return 'FAFDASF';
    }
  }

  get qouteApplianceType() {
    return this.qoute.applianceType;
  }

  get qouteApplianceMake() {
    return this.qoute.applianceMake;
  }

  get qouteJobType() {
    return this.qoute.jobType;
  }
}

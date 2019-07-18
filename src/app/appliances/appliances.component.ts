import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.scss']
})
export class AppliancesComponent implements OnInit {
  headerText: string;
  applianceName: string;

  isAppliances: boolean;
  isWashingMachine: boolean;
  isDishwasher: boolean;
  isTumbleDryer: boolean;
  isElectricCooker: boolean;
  isMicrowave: boolean;
  isExtractorHood: boolean;
  isFridgeFreezer: boolean;
  isCommercialAppliances: boolean;

  constructor(private router: Router) { }

  ngOnInit() {

    switch (this.router.url) {
      case '/appliance-repairs/washing-machine-repairs': {
        this.reset();
        this.isWashingMachine = true;
        this.headerText = 'Washing Machine Repairs';
        this.applianceName = 'washing machine';
        break;
      }
      case '/appliance-repairs/dishwasher-repairs': {
        this.reset();
        this.isDishwasher = true;
        this.headerText = 'Dishwasher Repairs';
        this.applianceName = 'dishwasher';
        break;
      }
      case '/appliance-repairs/tumble-dryer-repairs': {
        this.reset();
        this.isTumbleDryer = true;
        this.headerText = 'Tumble Dryer Repairs';
        this.applianceName = 'tumble dryer';
        break;
      }
      case '/appliance-repairs/electric-oven-repairs': {
        this.reset();
        this.isElectricCooker = true;
        this.headerText = 'Electric Cooker/Oven Repairs';
        this.applianceName = 'electric oven/cooker';
        break;
      }
      case '/appliance-repairs/microwave-repairs': {
        this.reset();
        this.isMicrowave = true;
        this.headerText = 'Microwave Repairs';
        this.applianceName = 'microwave';
        break;
      }
      case '/appliance-repairs/extractor-hood-repairs': {
        this.reset();
        this.isExtractorHood = true;
        this.headerText = 'Extractor Hood Repairs';
        this.applianceName = 'extractor hood';
        break;
      }
      case '/appliance-repairs/fridge-freezer-repairs': {
        this.reset();
        this.isFridgeFreezer = true;
        this.headerText = 'Fridge Freezer Repairs';
        this.applianceName = 'fridge freezer';
        break;
      }
      case '/appliance-repairs/commercial-appliance-repairs': {
        this.reset();
        this.isCommercialAppliances = true;
        this.headerText = 'Commercial Appliance Repairs';
        this.applianceName = 'commercial appliance';
        break;
      }
      default: {
        this.reset();
        this.isAppliances = true;
        this.headerText = 'Appliance Repairs';
        break;
      }
    }
  }

  reset() {
    this.isAppliances = false;
    this.isWashingMachine = false;
    this.isDishwasher = false;
    this.isTumbleDryer = false;
    this.isElectricCooker = false;
    this.isMicrowave = false;
    this.isExtractorHood = false;
    this.isFridgeFreezer = false;
    this.isCommercialAppliances = false;
  }
}

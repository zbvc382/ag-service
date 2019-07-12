import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.scss']
})
export class AppliancesComponent implements OnInit {
  headerText: string;

  isAppliances = false;
  isWashingMachine = false;
  isDishwasher = false;
  isTumbleDryer = false;
  isElectricCooker = false;
  isMicrowave = false;
  isExtractorHood = false;
  isFridgeFreezer = false;
  isCommercialAppliances = false;

  constructor(private router: Router) { }

  ngOnInit() {

    switch (this.router.url) {
      case '/appliance-repairs/washing-machine-repairs': {
        this.headerText = 'Washing Machine Repairs';
        break;
      }
      case '/appliance-repairs/dishwasher-repairs': {
        this.headerText = 'Dishwasher Repairs';
        break;
      }
      case '/appliance-repairs/tumble-dryer-repairs': {
        this.headerText = 'Tumble Dryer Repairs';
        break;
      }
      case '/appliance-repairs/electric-oven-repairs': {
        this.headerText = 'Electric Oven Repairs';
        break;
      }
      case '/appliance-repairs/microwave-repairs': {
        this.headerText = 'Microwave Repairs';
        break;
      }
      case '/appliance-repairs/extractor-hood-repairs': {
        this.headerText = 'Extractor Hood Repairs';
        break;
      }
      case '/appliance-repairs/fridge-freezer-repairs': {
        this.headerText = 'Fridge Freezer Repairs';
        break;
      }
      case '/appliance-repairs/commercial-appliance-repairs': {
        this.headerText = 'Commercial Appliance Repairs';
        break;
      }
      default: {
        this.headerText = 'Appliance Repairs';
        this.isAppliances = true;
        break;
      }
    }
  }
}

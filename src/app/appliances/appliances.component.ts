import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.scss']
})
export class AppliancesComponent implements OnInit {
  routeTitle: string;
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

  constructor(private router: Router, private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {

    switch (this.router.url) {
      case '/appliance-repairs/washing-machine-repairs': {
        this.reset();
        this.isWashingMachine = true;
        this.headerText = 'Washing Machine Repairs in London';
        this.applianceName = 'washing machine';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/washing-machine-repairs');

        this.title.setTitle('Washing Machine Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Washing Machine Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Washing Machine Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Washing Machine Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/washing-machine-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Washing Machine Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Washing Machine Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/appliance-repairs/dishwasher-repairs': {
        this.reset();
        this.isDishwasher = true;
        this.headerText = 'Dishwasher Repairs in London';
        this.applianceName = 'dishwasher';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/dishwasher-repairs');

        this.title.setTitle('Dishwasher Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Dishwasher Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Dishwasher Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Dishwasher Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/dishwasher-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Dishwasher Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Dishwasher Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/appliance-repairs/tumble-dryer-repairs': {
        this.reset();
        this.isTumbleDryer = true;
        this.headerText = 'Tumble and Condenser Dryer Repairs in London';
        this.applianceName = 'tumble dryer';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/tumble-dryer-repairs');

        this.title.setTitle('Tumble and Condenser Dryer Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Tumble and Condenser Dryer Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Tumble and Condenser Dryer Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Tumble and Condenser Dryer Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/tumble-dryer-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Tumble and Condenser Dryer Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Tumble and Condenser Dryer Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/appliance-repairs/electric-oven-repairs': {
        this.reset();
        this.isElectricCooker = true;
        this.headerText = 'Electric Oven, Cooker, and Hob Repairs in London';
        this.applianceName = 'electric oven/cooker/hob';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/electric-oven-repairs');

        this.title.setTitle('Electric Oven, Cooker, and Hob Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Electric Oven, Cooker, and Hob Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Electric Oven, Cooker, and Hob Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Electric Oven, Cooker, and Hob Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/electric-oven-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Electric Oven, Cooker, and Hob Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Electric Oven, Cooker, and Hob Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/appliance-repairs/microwave-repairs': {
        this.reset();
        this.isMicrowave = true;
        this.headerText = 'Microwave Repairs in London';
        this.applianceName = 'microwave';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/microwave-repairs');

        this.title.setTitle('Microwave Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Microwave Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Microwave Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Microwave Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/microwave-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Microwave Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Microwave Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/appliance-repairs/extractor-hood-repairs': {
        this.reset();
        this.isExtractorHood = true;
        this.headerText = 'Extractor Hood Repairs in London';
        this.applianceName = 'extractor hood';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/extractor-hood-repairs');

        this.title.setTitle('Extractor Hood Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Extractor Hood Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Extractor Hood Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Extractor Hood Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/extractor-hood-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Extractor Hood Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Extractor Hood Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/appliance-repairs/fridge-freezer-repairs': {
        this.reset();
        this.isFridgeFreezer = true;
        this.headerText = 'Fridge Freezer Repairs in London';
        this.applianceName = 'fridge freezer';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/fridge-freezer-repairs');

        this.title.setTitle('Fridge Freezer Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Fridge Freezer Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Fridge Freezer Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Fridge Freezer Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/fridge-freezer-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Fridge Freezer Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Fridge Freezer Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/appliance-repairs/commercial-appliance-repairs': {
        this.reset();
        this.isCommercialAppliances = true;
        this.headerText = 'Commercial Appliance Repairs in London';
        this.applianceName = 'commercial appliance';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs/commercial-appliance-repairs');

        this.title.setTitle('Commercial Appliance Repairs in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Commercial Appliance Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Commercial Appliance Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Commercial Appliance Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/commercial-appliance-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Commercial Appliance Repairs in London | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Commercial Appliance Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      default: {
        this.reset();
        this.isAppliances = true;
        this.headerText = 'Local Professional Appliance Repair Service in London';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repairs');

        this.title.setTitle('Local Professional Appliance Repair Service in London | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Local Professional Appliance Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Local Professional Appliance Repair Service in London'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Local Professional Appliance Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Local Professional Appliance Repair Service in London'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Local Professional Appliance Repair Service in London. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';

@Component({
  selector: 'app-error-codes',
  templateUrl: './error-codes.component.html',
  styleUrls: ['./error-codes.component.scss']
})
export class ErrorCodesComponent implements OnInit {
  headerText: string;
  isErrorCodes: boolean;

  isWashingMachineIndesit: boolean;
  isWashingMachineWhirpool: boolean;

  constructor(private router: Router, private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {

    switch (this.router.url) {
      case '/error-codes/indesit-washing-machine-fault-codes/.': {
        this.reset();
        this.isWashingMachineIndesit = true;
        this.headerText = 'Indesit Washing Machine Fault Codes';
        this.title.setTitle('Indesit Washing Machine Fault Codes | A&G Appliances');
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/error-codes/indesit-washing-machine-fault-codes/');

        this.meta.updateTag({
          name: 'description',
          content: 'Indesit Washing Machine Fault Codes. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Indesit Washing Machine Fault Codes | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Indesit Washing Machine Fault Codes. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/error-codes/indesit-washing-machine-fault-codes/'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Indesit Washing Machine Fault Codes | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Indesit Washing Machine Fault Codes. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/error-codes/whirlpool-washing-machine-error-codes/.': {
        this.reset();
        this.isWashingMachineWhirpool = true;
        this.headerText = 'Whirpool Washing Machine Error Codes';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/error-codes/whirlpool-washing-machine-error-codes/');

        this.title.setTitle('Whirpool Washing Machine Error Codes | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Whirpool Washing Machine Error Codes. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Whirpool Washing Machine Error Codes | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Whirpool Washing Machine Error Codes. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/error-codes/whirlpool-washing-machine-error-codes/'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Whirpool Washing Machine Error Codes | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Whirpool Washing Machine Error Codes. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      default: {
        this.reset();
        this.isErrorCodes = true;
        this.headerText = 'Error Codes';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/error-codes/');

        this.title.setTitle('Error Codes | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Find out what that strange error or fault code means for your kitchen appliance.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Error Codes | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Find out what that strange error or fault code means for your kitchen appliance.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/error-codes/'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Error Codes | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Find out what that strange error or fault code means for your kitchen appliance.'
        });
        break;
      }
    }
  }

  reset() {
    this.isErrorCodes = false;
    this.isWashingMachineIndesit = false;
    this.isWashingMachineWhirpool = false;
  }
}

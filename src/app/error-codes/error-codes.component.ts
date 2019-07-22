import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {

    switch (this.router.url) {
      case '/error-codes/indesit-washing-machine-fault-codes': {
        this.reset();
        this.isWashingMachineIndesit = true;
        this.headerText = 'Indesit Washing Machine Fault Codes';
        break;
      }
      case '/error-codes/whirlpool-washing-machine-error-codes': {
        this.reset();
        this.isWashingMachineWhirpool = true;
        this.headerText = 'Whirpool Washing Machine Error Codes';
        break;
      }
      default: {
        this.reset();
        this.isErrorCodes = true;
        this.headerText = 'Error Codes';
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

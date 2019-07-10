import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.scss']
})
export class AppliancesComponent implements OnInit {
  text: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/appliance-repairs/washing-machine-repairs') {
      this.text = 'This template is about WASHING MACHINE REPAIRS';
    }

    if (this.router.url === '/appliance-repairs/dishwasher-repairs') {
      this.text = 'This template is about DISHWASHER REPAIRS';
    }

    console.log(this.router.url);
  }

}

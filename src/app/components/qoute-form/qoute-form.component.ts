import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.scss']
})
export class QouteFormComponent implements OnInit {
  qouteForm: FormGroup;
  types = ['washing machine', 'dishwasher', 'tumble dryer'];
  makes = ['boch', 'samsung', 'indesit'];
  jobs = ['repair', 'installation'];

  constructor() { }

  ngOnInit() {
    this.qouteForm = new FormGroup({
      applianceType: new FormControl('')
    });
  }
}

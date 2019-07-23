import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomeFormModel } from '../../_models/HomeFormModel';
// import { HomeFormModel } from 'src/app/_models/HomeFormModel';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit, OnDestroy {
  @Output() quoteSubmitted = new EventEmitter();

  form: FormGroup;
  isError = false;
  isRepAndInst = true;
  statusSubscription: any;
  changeSubscription: any;

  nonFitted = [
    'Commercial Microwave',
    'Commercial Dishwasher',
    'Commercial Oven',
    'Electric Oven',
    'Electric Cooker',
    'Extractor Hood',
    'Tumble Dryer',
    'Condenser Dryer'
  ];

  nonInstallable = [
    'Commercial Microwave',
    'Commercial Dishwasher',
    'Commercial Oven',
    'Electric Oven',
    'Electric Cooker',
    'Extractor Hood',
    'Tumble Dryer',
    'Condenser Dryer'
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      applianceType: ['', Validators.required],
      applianceMake: ['', Validators.required],
      jobType: ['', Validators.required],
      fitting: ['', Validators.required]
    });

    this.form.get('fitting').disable();
    this.form.get('jobType').disable();

    this.statusSubscription = this.form.statusChanges.subscribe(() => {
      if (this.isError && this.form.valid) {
        this.isError = false;
      }
    });

    this.changeSubscription = this.form.get('applianceType').valueChanges.subscribe((value) => {
      if (this.nonFitted.includes(value)) {
        this.form.get('fitting').disable();
      } else {
        this.form.get('fitting').enable();
      }

      if (this.nonInstallable.includes(value)) {
        this.form.get('jobType').enable();
        this.isRepAndInst = false;
        this.form.get('jobType').setValue('Repair');
      } else {
        this.form.get('jobType').enable();
        this.isRepAndInst = true;
      }
    });
  }

  getFormValue() {
    return this.form.value as HomeFormModel;
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.quoteSubmitted.emit(this.getFormValue());
    } else {
      this.isError = true;
    }
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
    this.changeSubscription.unsubscribe();
  }
}

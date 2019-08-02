import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(64), Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}

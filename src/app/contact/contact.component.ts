import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {
    this.title.setTitle('Contact | A&G Appliances');
    this.meta.updateTag({
      name: 'description',
      content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contact | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.ag-repairs.co.uk/contact-us-appliance-services'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Contact | A&G Appliances'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
    });
  }
}

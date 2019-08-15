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
    this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/contact-us-appliance-services/');
    this.meta.updateTag({
      name: 'description',
      content: 'For more information or to book a service contact A&G Appliances at 0207 476 8725.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contact | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'For more information or to book a service contact A&G Appliances at 0207 476 8725.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.ag-repairs.co.uk/contact-us-appliance-services/'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Contact | A&G Appliances'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'For more information or to book a service contact A&G Appliances at 0207 476 8725.'
    });
  }
}

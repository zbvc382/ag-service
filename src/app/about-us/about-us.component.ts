import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/about-us');

    this.title.setTitle('About Us | A&G Appliances');
    this.meta.updateTag({
      name: 'description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'About Us | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.ag-repairs.co.uk/about-us'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'About Us | A&G Appliances'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
  }
}

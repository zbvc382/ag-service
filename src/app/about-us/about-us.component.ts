import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {
    this.title.setTitle('About Us | A&G Appliances');
    this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/about-us/');
    this.meta.updateTag({
      name: 'description',
      content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'About Us | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.ag-repairs.co.uk/about-us/'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'About Us | A&G Appliances'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
    });
  }
}

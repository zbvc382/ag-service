import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';

@Component({
  selector: 'app-areas-covered',
  templateUrl: './areas-covered.component.html',
  styleUrls: ['./areas-covered.component.scss']
})
export class AreasCoveredComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/areas-covered');

    this.title.setTitle('Areas Covered | A&G Appliances');
    this.meta.updateTag({
      name: 'description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Areas Covered | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.ag-repairs.co.uk/areas-covered'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Areas Covered | A&G Appliances'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'We offer affordable appliance repair service in the London area. Call A&G Appliances at 0207 476 8725 for same or next day service.'
    });
  }
}

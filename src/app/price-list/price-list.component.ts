import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {
    this.title.setTitle('Price List | A&G Appliances');
    this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/appliance-repair-prices/');

    this.meta.updateTag({
      name: 'description',
      content: 'A&G Appliances provides a simple pricing structure so you can be sure what you are paying for.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Price List | A&G Appliances'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'A&G Appliances provides a simple pricing structure so you can be sure what you are paying for.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.ag-repairs.co.uk/appliance-repair-prices/'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Price List | A&G Appliances'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'A&G Appliances provides a simple pricing structure so you can be sure what you are paying for.'
    });
  }

}

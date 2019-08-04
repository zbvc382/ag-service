import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../_services/meta.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  headerText: string;

  isMain: boolean;

  isSubOne: boolean;
  isSubTwo: boolean;
  isSubThree: boolean;

  constructor(private router: Router, private title: Title, private meta: Meta, private metaService: MetaService) { }

  ngOnInit() {

    switch (this.router.url) {
      case '/blog/common-electric-oven-problems': {
        this.reset();
        this.isSubOne = true;
        this.headerText = 'Common Electric Oven Problems';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/blog/common-electric-oven-problems');

        this.title.setTitle('Common Electric Oven Problems | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Common Electric Oven Problems. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Common Electric Oven Problems | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Common Electric Oven Problems. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/blog/common-electric-oven-problems'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Common Electric Oven Problems | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Common Electric Oven Problems. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/blog/oven-does-not-work-timer-set-manual-or-automatic': {
        this.reset();
        this.isSubTwo = true;
        this.headerText = 'Oven Does Not Work. Timer Set – Manual or Automatic?';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/blog/oven-does-not-work-timer-set-manual-or-automatic');

        this.title.setTitle('Oven Does Not Work. Timer Set – Manual or Automatic? | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Oven Does Not Work. Timer Set – Manual or Automatic?. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Oven Does Not Work. Timer Set – Manual or Automatic? | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Oven Does Not Work. Timer Set – Manual or Automatic?. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/appliance-repairs/blog/oven-does-not-work-timer-set-manual-or-automatic'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Oven Does Not Work. Timer Set – Manual or Automatic? | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Oven Does Not Work. Timer Set – Manual or Automatic?. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      case '/blog/fridge-freezer-not-cooling-any-more-fault-finding': {
        this.reset();
        this.isSubThree = true;
        this.headerText = 'Fridge Freezer Not Cooling Any More, Fault Finding';
        this.metaService.createCanonicalURL('https://www.ag-repairs.co.uk/blog/fridge-freezer-not-cooling-any-more-fault-finding');

        this.title.setTitle('Fridge Freezer Not Cooling Any More, Fault Finding | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'Fridge Freezer Not Cooling Any More, Fault Finding. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Fridge Freezer Not Cooling Any More, Fault Finding'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'Fridge Freezer Not Cooling Any More, Fault Finding. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/blog/fridge-freezer-not-cooling-any-more-fault-finding'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Fridge Freezer Not Cooling Any More, Fault Finding'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'Fridge Freezer Not Cooling Any More, Fault Finding. Call A&G Appliances at 0207 476 8725 for same or next day service.'
        });
        break;
      }
      default: {
        this.reset();
        this.isMain = true;
        this.headerText = 'Blog';
        this.title.setTitle('Blog | A&G Appliances');
        this.meta.updateTag({
          name: 'description',
          content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
        });
        this.meta.updateTag({
          property: 'og:title',
          content: 'Blog | A&G Appliances'
        });
        this.meta.updateTag({
          property: 'og:description',
          content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://www.ag-repairs.co.uk/blog'
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: 'Blog | A&G Appliances'
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: 'A&G Appliances is a well establish company employing experienced appliance technicians. Call our appliance repair engineer today.'
        });
      }
    }
  }

  reset() {
    this.isSubOne = false;
    this.isSubTwo = false;
    this.isSubThree = false;
    this.isMain = false;
  }
}

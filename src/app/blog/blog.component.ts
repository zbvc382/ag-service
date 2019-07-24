import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {

    switch (this.router.url) {
      case '/blog/common-electric-oven-problems': {
        this.reset();
        this.isSubOne = true;
        this.headerText = 'Common electric oven problems';
        break;
      }
      case '/blog/oven-does-not-work-timer-set-manual-or-automatic': {
        this.reset();
        this.isSubTwo = true;
        this.headerText = 'Oven does not work. Timer set – manual or automatic?';
        break;
      }
      case '/blog/fridge-freezer-not-cooling-any-more-fault-finding': {
        this.reset();
        this.isSubThree = true;
        this.headerText = 'Fridge freezer not cooling any more, fault finding';
        break;
      }
      default: {
        this.reset();
        this.isMain = true;
        this.headerText = 'Blog';
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

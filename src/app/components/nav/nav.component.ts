import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Renderer2,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {
  @Output() public sidenavToggle = new EventEmitter();
  @ViewChild('nav', { static: false }) nav: ElementRef;
  isSticky = false;
  isBrowser = false;
  navPosition: any;

  constructor(private renderer: Renderer2, private breakpointObserver: BreakpointObserver, @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.navPosition = this.nav.nativeElement.offsetTop;

      this.renderer.listen('window', 'scroll', (event) => {
        if (event) {
          const windowScroll = window.pageYOffset;
          if (windowScroll > this.navPosition) {
            this.isSticky = true;
          } else {
            this.isSticky = false;
          }
        }
      });
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  get isMobile(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 1048px)');
  }
}

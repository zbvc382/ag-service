import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Renderer2,
  ElementRef,
  AfterViewInit,
  ViewChild,
  HostListener
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
  navPosition: any;

  constructor(private breakpointObserver: BreakpointObserver, private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.navPosition = this.nav.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.navPosition) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  get isMobile(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 1048px)');
  }
}

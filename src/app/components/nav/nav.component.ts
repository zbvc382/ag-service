import { Component, OnInit, EventEmitter, Output, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  // @ViewChild('stickyMenu', { read: true, static: false }) menuElement: ElementRef;
  // sticky = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  // ngAfterViewInit(): void {
  //   this.renderer.listen('window', 'scroll', (event) => {
  //     if (event) {
  //       this.sticky = true;
  //     }
  //   });
  // }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}

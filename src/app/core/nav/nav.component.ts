import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isNavbarCollapsed = true;
  siteTitle = 'C2 Design Studio';

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Home', link: ['/home'] },
      { caption: 'Our Work', link: ['/our-work'] },
      { caption: 'Services', link: ['/services'] },
      { caption: 'Blog', link: ['/blog'] },
      { caption: 'Contact', link: ['/contact'] },
    ];
  }

  constructor() { }
}

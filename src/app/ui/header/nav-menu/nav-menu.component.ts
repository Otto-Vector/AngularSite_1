import {Component, Input, OnInit} from '@angular/core';

interface NavItem {
  content: string
  href: string
}


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  @Input() navItem : NavItem[]

  constructor() {
    this.navItem = [
      {
        content: 'Home',
        href: '#home'
      },
      {
        content: 'Blog',
        href: '#blog'
      },
      {
        content: 'Features',
        href: '#features'
      },
      {
        content: 'Pricing',
        href: '#pricing'
      },
      {
        content: 'Documentation',
        href: '#documentation'
      },
    ]
  }

  ngOnInit(): void {
  }

}

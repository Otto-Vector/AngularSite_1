import { Component, Input, OnInit} from '@angular/core';

interface NavItem {
  active?: boolean
  content: string
  href: string
}


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  navMenu : string = 'nav-menu'
  navMenuItem : string = this.navMenu + '__item'
  navMenuItemActive : string = this.navMenuItem + '_active'

  @Input() navItem : NavItem[]

  constructor() {
    this.navItem = [
      {
        content: 'Home',
        href: '#home',
        active: true
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

  scrollTo(fragment: string): void {
        const targetElement = document.querySelector(fragment);
        if (fragment && targetElement) {
            console.log('going to'+fragment)
            targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

        } else {
            console.log('nothing todo')
            window.scrollTo(0, 0);
        }
    }


  ngOnInit() {
  }

}

import {Component, Inject, Input, OnInit} from '@angular/core';
import {PageScrollService} from "ngx-page-scroll-core";
import {DOCUMENT} from "@angular/common";


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

  @Input() navItem : NavItem[] = [
    {
      content: 'Home',
      href: 'home',
    },
    {
      content: 'Blog',
      href: 'blog'
    },
    {
      content: 'Features',
      href: 'features'
    },
    {
      content: 'Pricing',
      href: 'pricing'
    },
    {
      content: 'Documentation',
      href: 'documentation'
    },
  ]

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  public scrollTo(fragment: string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#'+fragment
    });
  }

  ngOnInit() {
  }

}

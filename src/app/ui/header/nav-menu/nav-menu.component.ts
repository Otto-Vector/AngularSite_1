import {Component, Input, OnInit} from '@angular/core';


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
      active: true
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
//**************************************************************************
//   activeSection : number = 1;
//
//   constructor(
//     private pageScrollService: PageScrollService,
//     @Inject(DOCUMENT) private document: any
//   ) { }

  // fullPageScroll(e: string, i:number) {
  //   this.pageScrollService.scroll({
  //     scrollTarget: e,
  //     document: this.document.querySelector(e)
  //   });
  //
  //   this.activeSection = i;
  // }

//**************************************************************************
  scrollTo(fragment: string): void {
        const targetElement = document.getElementById(fragment);
        if (fragment && targetElement) {
            console.log('going to'+fragment)
            targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

        } else { //if home
            console.log('nothing todo')
            // window.scrollTo(0, 0);
            window.scroll({
                   top: 0,
                   left: 0,
                   behavior: 'smooth'
                  });
        }
    }


  ngOnInit() {
  }

}

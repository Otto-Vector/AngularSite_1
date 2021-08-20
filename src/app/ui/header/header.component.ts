import { Component, OnInit } from '@angular/core';
import {GetButton} from "../reusable-elements/get-button/get-button.component";

interface Classes {
  main: string
  leftPanel: string
  logo: string
  nav: string
  rightPanel: string
  socials: string
  getButton: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  main_class : string = 'header'
  header : Classes = {
    main : this.main_class,
    leftPanel : this.main_class+'__left-panel',
    logo : this.main_class+'__logo',
    nav : this.main_class+'__nav',
    rightPanel : this.main_class+'__right-panel',
    socials : this.main_class+'__socials',
    getButton : this.main_class+'__get-button'
  }

  btnGetStarted : GetButton = {content: 'Get started', mode: 'blue', action: ()=> {console.log('Get started')}}

  // targetElement.scrollIntoView({behavior: "smooth"})
  constructor() { }

  ngOnInit(): void {
  }

}

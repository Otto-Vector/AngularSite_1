import { Component, OnInit } from '@angular/core';
import {GetButton} from "../reusable-elements/get-button/get-button.component";

interface Classes {
  main: string
  logo: string
  nav: string
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
    logo : this.main_class+'__logo',
    nav : this.main_class+'__nav',
    socials : this.main_class+'__socials',
    getButton : this.main_class+'__getButton'
  }

  btnGetStarted : GetButton = {content: 'Get started', mode: 'blue', action: ()=> {console.log('Get started')}}

  constructor() { }

  ngOnInit(): void {
  }

}

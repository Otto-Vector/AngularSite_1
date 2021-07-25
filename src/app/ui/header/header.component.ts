import { Component, OnInit } from '@angular/core';
import {GetButton} from "../reusable-elements/get-button/get-button.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  btnGetStarted : GetButton = {content: 'Get started', mode: 'blue', action: ()=> {console.log('Get started')}}

  constructor() { }

  ngOnInit(): void {
  }

}

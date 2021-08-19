import { Component, OnInit } from '@angular/core';
import {GetButton} from "../reusable-elements/get-button/get-button.component";

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor() { }

  forWhiteButton : GetButton = {mode: "white", content: 'view pricing', action: () => {console.log('view pricing')}}
  forBlueButton : GetButton = {mode: "no-fill", content: 'read documentation', action: () => {console.log('read documentation')}}

  ngOnInit(): void {
  }

}

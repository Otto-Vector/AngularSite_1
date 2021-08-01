import { Component, OnInit } from '@angular/core';
import {GetButton} from "../reusable-elements/get-button/get-button.component";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features : string = 'features'
  wrapper : string = this.features + '__wrapper'
  label : string = this.features + '__label'
  header : string = this.features + '__header'
  cards : string = this.features + '__cards'
  buttons : string = this.features + '__buttons'
  readMore : string = this.buttons + '__read-more'
  or : string = this.buttons + '__or'
  line : string = this.buttons + '__line'
  getStarted : string = this.buttons + '__get-started'

  labelText : string = 'about us'
  headerText : string = 'Read about our app'

  buttonRead : GetButton = {mode: "pink", content: 'Read more', action: () => {}}
  buttonGet : GetButton = {mode: "blue", content: 'Get started', action: () => {}}

  constructor() { }

  ngOnInit(): void {
  }

}

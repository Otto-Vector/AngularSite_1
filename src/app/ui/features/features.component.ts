import { Component, OnInit } from '@angular/core';
import {GetButton} from "../reusable-elements/get-button/get-button.component";

interface Classes {
  main: string
  wrapper: {
    main: string
    label: string
    header: string
    cards: string
    buttons: {
      main : string
      readMore : string
      line: string
      or: string
      getStarted: string
    }
  }
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  main_class : string = 'features'
  features : Classes = {
    main : this.main_class,
    wrapper: {
      main: this.main_class + '__wrapper',
      label: this.main_class + '__label',
      header: this.main_class + '__header',
      cards: this.main_class + '__cards',
      buttons: {
        main: this.main_class + '__buttons',
        readMore: this.main_class + '__read-more',
        or: this.main_class + '__or',
        line: this.main_class + '__line',
        getStarted: this.main_class + '__get-started'
      }
    }
  }


  labelText : string = 'about us'
  headerText : string = 'Read about our app'

  buttonRead : GetButton = {mode: "pink", content: 'Read more', action: () => {}}
  buttonGet : GetButton = {mode: "blue", content: 'Get started', action: () => {}}

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {GetButton} from "../../reusable-elements/get-button/get-button.component";

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  forButton : GetButton = {
    mode: 'gray',
    content: 'go to documentation',
    action: () => {
      console.log('go to Documentation')
    }
  }

  content = 'expansion-panel__content'
  active = false
  constructor() { }

  ngOnInit(): void {
  }

}

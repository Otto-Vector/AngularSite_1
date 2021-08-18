import {Component, Input, OnInit} from '@angular/core';
import {GetButton} from "../../reusable-elements/get-button/get-button.component";

interface Classes {
  main: string
  expand: string
  header : string
  indicator: string
  content: string
  text: string
  button: string
}

export interface ExpansionPanel {
  questionHeader: string
  answerText: string
  gotoUrl: string
}

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  private mainClass: string = 'expansion-panel'
  expansionPanel : Classes = {
    main: this.mainClass,
    expand: this.mainClass + '--expand',
    header : this.mainClass + '__header',
    indicator: this.mainClass + '__indicator',
    content: this.mainClass + '__content',
    text: this.mainClass + '__text',
    button: this.mainClass + '__button',
  }

  expand = false

  @Input() thisElement : ExpansionPanel = {
    questionHeader: 'Reque insolens in vel?',
    answerText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
    gotoUrl: 'https://yandex.ru'
  }

  forButton : GetButton = {
    mode: 'gray',
    content: 'go to documentation',
    action: () => {
      window.open(this.thisElement.gotoUrl, '_blank')
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}

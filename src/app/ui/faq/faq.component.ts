import { Component, OnInit } from '@angular/core';
import {ExpansionPanelService} from "./expansion-panel.service";
import {ExpansionPanel} from "./expansion-panel/expansion-panel.component";

interface Classes {
  main : string
  label: string
  header: string
  wrapper: string
}


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  private mainClass = 'app-faq'
  faq : Classes = {
    main   : this.mainClass,
    label  : this.mainClass+'__label',
    header : this.mainClass+'__header',
    wrapper: this.mainClass+'__wrapper',
  }
  textForLabel = 'customer help'
  textForHeader = 'Frequently asked questions'

  questions : ExpansionPanel[] | undefined
  constructor(
    private expansionPanelService : ExpansionPanelService
  ) {
    this.questions = expansionPanelService.questions
    }

  ngOnInit(): void {
  }


}

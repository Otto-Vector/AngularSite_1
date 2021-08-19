import { Component, OnInit } from '@angular/core';
import {ButtonView} from "./button-view/button-view.component";
import {ButtonSee} from "./button-see/button-see.component";

interface Classes {
    main: string,
    leftPanel: string
    wrap: string
    label: string
    header: string
    content: string
    buttons: string
    buttonView: string
    buttonSee: string
    rightPanel: string
    image: string
}

@Component({
  selector: 'app-plan-and-manage',
  templateUrl: './plan-and-manage.component.html',
  styleUrls: ['./plan-and-manage.component.scss']
})
export class PlanAndManageComponent implements OnInit {

  main_class : string = 'plan-and-manage'
  planAndManage : Classes = {
    main: this.main_class,
    leftPanel: this.main_class + '__left-panel',
    wrap: this.main_class + '__wrap',
    label: this.main_class + '__label',
    header: this.main_class + '__header',
    content: this.main_class + '__content',
    buttons: this.main_class + '__buttons',
    buttonView: this.main_class + '__button-view',
    buttonSee: this.main_class + '__button-see',
    rightPanel: this.main_class + '__right-panel',
    image: this.main_class + '__image'
  }

  textForLabel: string = 'DESKTOP AND MOBILE APP'
  forButtonView: ButtonView = {text:'View video', action: () => {console.log('From Plan-and-Manage')}}
  forButtonSee: ButtonSee = {text:'See features', action: () => {console.log('From Plan-and-Manage')}}

  constructor() { }

  ngOnInit(): void {
  }

}

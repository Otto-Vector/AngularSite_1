import { Component, OnInit } from '@angular/core';
import {ButtonView} from "./button-view/button-view.component";
import {ButtonSee} from "./button-see/button-see.component";

@Component({
  selector: 'app-plan-and-manage',
  templateUrl: './plan-and-manage.component.html',
  styleUrls: ['./plan-and-manage.component.scss']
})
export class PlanAndManageComponent implements OnInit {

  planAndManage : string = 'plan-and-manage'
  leftPanel : string = this.planAndManage+'__left-panel'
  wrap : string = this.planAndManage+'__wrap'
  rightPanel : string = this.planAndManage+'__right-panel'
  label : string = this.planAndManage+'__label'
  header : string = this.planAndManage+'__header'
  content : string = this.planAndManage+'__content'
  buttonView : string = this.planAndManage+'__button-view'
  buttonSee : string = this.planAndManage+'__button-see'
  image : string = this.planAndManage+'__image'

  textForLabel: string = 'DESKTOP AND MOBILE APP'
  forButtonView: ButtonView = {text:'View video', action: () => {console.log('From Plan-and-Manage')}}
  forButtonSee: ButtonSee = {text:'See features', action: () => {console.log('From Plan-and-Manage')}}

  constructor() { }

  ngOnInit(): void {
  }

}

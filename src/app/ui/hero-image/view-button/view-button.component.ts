import {Component, Input, OnInit} from '@angular/core';

export interface ViewButton {
  mode? : string
  action : ()=>void
}

@Component({
  selector: 'app-view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.scss']
})
export class ViewButtonComponent implements OnInit {

  view_button : string = "view_button"

  @Input() button: ViewButton = {mode: 'none', action: ()=>{console.log("view_button_action")}}

  constructor() { }

  ngOnInit(): void {
  }

}

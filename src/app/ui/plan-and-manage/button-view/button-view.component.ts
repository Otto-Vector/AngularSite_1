import {Component, Input, OnInit} from '@angular/core';

export interface ButtonView {
    text : string
   mode? : string
  action : ()=>void
}

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent implements OnInit {

  buttonView : string = 'button-view'

  @Input() button : ButtonView = {text: 'no text', action: () => {console.log('no action added')}}


  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';

export interface GetButton {
  content : string
  mode    : 'blue' | 'pink' | 'gray' | 'white'
  action  : () => void
}

@Component({
  selector: 'app-get-button',
  templateUrl: './get-button.component.html',
  styleUrls: ['./get-button.component.scss']
})
export class GetButtonComponent implements OnInit {

  getButton: string = 'get-button'
  buttonMode: string = ''

  @Input() button : GetButton = {mode: 'white', content: 'no init', action: () => {}}

  constructor() {
  }

  ngOnInit(): void {
    this.buttonMode = this.getButton+'--'+this.button.mode
  }

}

import {Component, Input, OnInit} from '@angular/core';

export interface GetButton {
  content : string
  mode    : 'blue' | 'pink' | 'gray' | 'white'
  action : () => void
}

@Component({
  selector: 'app-get-button',
  templateUrl: './get-button.component.html',
  styleUrls: ['./get-button.component.scss']
})
export class GetButtonComponent implements OnInit {

  get_button = 'get_button'

  @Input() button : GetButton = {mode: 'white', content: '55', action: () => {}}

  constructor() {

  }

  ngOnInit(): void {
  }

}

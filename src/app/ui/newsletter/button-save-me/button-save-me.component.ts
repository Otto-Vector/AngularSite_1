import {Component, Input, OnInit} from '@angular/core';

export interface ButtonSaveMe {
  content: string
  action: () => void
}

@Component({
  selector: 'app-button-save-me',
  templateUrl: './button-save-me.component.html',
  styleUrls: ['./button-save-me.component.scss']
})
export class ButtonSaveMeComponent implements OnInit {

  mainClass: string = 'button-save-me'

  @Input() button : ButtonSaveMe = {
    content: 'Save me NO INIT',
    action: () => {
      console.log('No saved actions')
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

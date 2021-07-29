import {Component, Input, OnInit} from '@angular/core';

export interface ButtonSee {
    text : string
   mode? : string
  action : ()=>void
}

@Component({
  selector: 'app-button-see',
  templateUrl: './button-see.component.html',
  styleUrls: ['./button-see.component.scss']
})
export class ButtonSeeComponent implements OnInit {

  buttonSee : string = 'button-see'

  @Input() button : ButtonSee = {text: 'no text', action: () => {console.log('no action added')}}

  constructor() { }

  ngOnInit(): void {
  }

}

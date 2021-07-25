import {Component, Input, OnInit} from '@angular/core';


export interface SliderButton {
  active: boolean
  title: string
  action: (arg0: string)=>void
}

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent implements OnInit {

  slider_button : string = 'slider_button'

  @Input() slider : SliderButton = {active: true, title: 'no title', action: (s)=> {console.log(s)}}

  constructor() { }

  ngOnInit(): void {
  }

}

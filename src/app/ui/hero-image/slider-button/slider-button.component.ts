import {Component, Input, OnInit} from '@angular/core';


export interface SliderButton {
  title: string
  //при отсутствии в конструкторе устанавливается значение false
  active?: boolean
  action: (title?:string)=>void
}

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent implements OnInit {

  slider_button : string = 'slider_button'

  @Input() slider : SliderButton[] = [{active: false, title: 'no title', action: ()=>{}}]

  constructor() {
  }

  ngOnInit(): void {
    //пересборка входящего массива
    this.slider = this.slider.map<SliderButton>(
      (elem):SliderButton=>{
        elem.active = elem.active ?? false
        let action_buffer = elem.action
        elem.action = (s)=> {
          action_buffer(s)
          this.switch_to_active(s)
        }
      return {
        title: elem.title,
        active: elem.active,
        action: elem.action
      }
    })
  }

  switch_to_active(tit:string|undefined): void {
    if (typeof tit !== 'undefined') {
      for (let [i, {title}] of this.slider.entries()) {
        this.slider[i].active = (title === tit)
      }
    }
  }
}

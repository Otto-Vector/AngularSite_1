import { Component, OnInit } from '@angular/core';
import {ViewButton} from "../reusable-elements/view-button/view-button.component";
import {SliderButton} from "./slider-button/slider-button.component";

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {

  btnView : ViewButton = {action: () => {console.log("ViewButton from Hero component")}}
  sliderArr: SliderButton[] = [
    {title: "first", active: true, action: this.modeSw},
    {title: "second", active: false, action: this.modeSw},
    {title: "3rd", active: false, action: this.modeSw}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  modeSw(tit:string) {
    for (let [i,{title}] of this.sliderArr.entries()) {
      this.sliderArr[i].active = (title === tit)
    }
  }
}

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
    {title: "first", active: true, action: this.informator},
    {title: "second", action: this.informator},
    {title: "3rd", action: this.informator}
  ]

  heroImage : string = 'hero-image'
  container : string = this.heroImage+'__container'
  label : string = this.heroImage+'__label'
  header : string = this.heroImage+'__header'
  content : string = this.heroImage+'__content'
  sliders : string = this.heroImage+'__sliders'

  textForLabel : string = 'PLAN YOUR LIFE'

  constructor() { }

  ngOnInit(): void {
  }

  informator(s:string|undefined):void {
    s = 'from HeroImageComponent ' + (s??'')
    console.log(s)
  }
  // modeSw(tit:string) {
  //   for (let [i,{title}] of .getSliderArr.entries()) {
  //     this.sliderArr[i].active = (title === tit)
  //   }
    // for (let [i,{title}] of this.sliderArr.entries()) {
    //   this.sliderArr[i].active = (title === tit)
    // }
  // }
}

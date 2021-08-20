import { Component, OnInit } from '@angular/core';
import {ViewButton} from "./view-button/view-button.component";

interface Classes {
  main: string
  article: string
    label : string
    header : string
    text : string
  viewButton: string
  sliders : string
}

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {

  main_class : string = 'hero-image'
  heroImage : Classes = {
    main: this.main_class,
    article: this.main_class + '__article',
      label: this.main_class + '__label',
      header: this.main_class + '__header',
      text: this.main_class + '__text',
    viewButton: this.main_class + '__view-button',
    sliders: this.main_class + '__sliders'
  }

  textForLabel : string = 'PLAN YOUR LIFE'

  btnView : ViewButton = {action: () => {window.open('https://youtu.be/vDYP6AKw8bk', '_blank')}}
  // sliderArr: SliderButton[] = [
  //   {title: "first", active: true, action: this.informator},
  //   {title: "second", action: this.informator},
  //   {title: "3rd", action: this.informator}
  // ]
  constructor() { }

  ngOnInit(): void {
  }

  informator(s:string|undefined):void {
    s = 'from HeroImageComponent ' + (s??'')
    console.log(s)
  }

}

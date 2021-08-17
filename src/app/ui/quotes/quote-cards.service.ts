import { Injectable } from '@angular/core';
import {QuoteCard} from "./quote-card-slide/quote-card-slide.component";

@Injectable({
  providedIn: 'root'
})
export class QuoteCardsService {

  randSize(min=150,max=250):number {
    return  Math.floor(Math.random() * (max - min + 1)) + min
  }

  private randomFace = (size:number=this.randSize())=> `https://source.unsplash.com/random/${size}x${size}?face`


  public quoteCards : QuoteCard[] = [
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
      image: '../../../../assets/images/faces/face3.jpg'
    },
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'.trim(),
      image: this.randomFace()
    },
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'.toUpperCase(),
      image: this.randomFace()
    },
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos',
      image: this.randomFace()
    },
    {
      text: ', vero tractatos ius an, in mel diceret persecuti.',
      image: this.randomFace()
    },
    {
      text: 'lkjlk;dfjsa;ldkfjasd;lkfj',
      image: this.randomFace()
    },
    {
      text: 'Hi',
      image: this.randomFace()
    },
    {
      text: 'ffa;ldfjka;dlsfj sdf;a dsa sdf asdf as',
      image: this.randomFace()
    },
    {
      text: 'Hi End',
      image: this.randomFace()
    },
  ]

  constructor() { }
}

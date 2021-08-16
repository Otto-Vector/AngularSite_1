import { Injectable } from '@angular/core';
import {QuoteCard} from "./quote-card-slide/quote-card-slide.component";

@Injectable({
  providedIn: 'root'
})
export class QuoteCardsService {

  public quoteCards : QuoteCard[] = [
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
      image: '../../../../assets/images/faces/face1.jpg'
    },
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'.trim(),
      image: '../../../../assets/images/faces/face2.jpg'
    },
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'.toUpperCase(),
      image: '../../../../assets/images/faces/face3.jpg'
    },
    {
      text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos',
      image: '../../../../assets/images/faces/face4.jpg'
    },
    {
      text: ', vero tractatos ius an, in mel diceret persecuti.',
      image: '../../../../assets/images/faces/face5.jpg'
    },
    {
      text: 'lkjlk;dfjsa;ldkfjasd;lkfj',
      image: '../../../../assets/images/faces/face6.jpg'
    },
    {
      text: 'Hi',
      image: '../../../../assets/images/faces/face7.jpg'
    },
    {
      text: 'ffa;ldfjka;dlsfj sdf;a dsa sdf asdf as',
      image: '../../../../assets/images/faces/face8.jpg'
    },
    {
      text: 'Hi End',
      image: '../../../../assets/images/faces/face9.jpg'
    },
  ]
  constructor() { }
}

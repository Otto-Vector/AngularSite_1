import {Component, Input, OnInit} from '@angular/core';


export interface QuoteCard {
  text: string
  image: string
}

@Component({
  selector: 'app-quote-card-slide',
  templateUrl: './quote-card-slide.component.html',
  styleUrls: ['./quote-card-slide.component.scss']
})
export class QuoteCardSlideComponent implements OnInit {

  mainClass: string = 'quote-card-slide'
  image:string = this.mainClass+'__image'

  @Input() quoteCardItem : QuoteCard = {
    text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
    image: './assets/images/faces/face1.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

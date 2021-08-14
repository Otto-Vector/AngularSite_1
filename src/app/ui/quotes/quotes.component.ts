import { Component, OnInit } from '@angular/core';
import {QuoteCard} from "./quote-card-slide/quote-card-slide.component";
import {SwiperOptions} from "swiper";


// import SwiperCore, {Pagination, Autoplay} from "swiper/core";
// SwiperCore.use([Pagination, Autoplay]);

interface Classes {
  main: string
  leftPanel: {
    main: string
    content: {
      main: string
      label: string
      header: string
      text: string
    }
  }
  rightPanel: {
    main: string
    slider: string
  }
}


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  private readonly mainClass: string = 'quotes'
  readonly quotes : Classes = {
    main: this.mainClass,
    leftPanel: {
      main: this.mainClass+'__left-panel',
      content: {
        main: this.mainClass+'__content',
        label: this.mainClass+'__label',
        header: this.mainClass+'__header',
        text: this.mainClass+'__text',
      }
    },
    rightPanel: {
      main: this.mainClass+'__right-panel',
      slider: this.mainClass+'__slider',
    }
  }

  readonly textForLabel: string = 'TESTIMOnials'
  readonly textForHeader: string = `Customers's quotes`
  readonly textFortext: string = 'Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.'

  swiperConfig: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        clickable: true
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true
      },
      breakpoints: {
        1200: {
            slidesPerView: 1.5,
          }
        }
  }

  quoteSwiper : QuoteCard[] = [
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

  ngOnInit(): void {
  }

}

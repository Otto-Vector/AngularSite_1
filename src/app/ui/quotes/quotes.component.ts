import { Component, OnInit } from '@angular/core';
import {QuoteCard} from "./quote-card-slide/quote-card-slide.component";
import {SwiperOptions} from "swiper";
import {QuoteCardsService} from "./quote-cards.service";


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

  swiperConfig2: SwiperOptions = {
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
        1280: {
            slidesPerView: 1.5,
          }
        }
  }

  quoteSwiper: QuoteCard[]
  constructor(
    readonly quoteCardsService : QuoteCardsService
  ) {
    this.quoteSwiper = quoteCardsService.quoteCards
    }


  ngOnInit(): void {
  }

}

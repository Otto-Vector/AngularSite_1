import { Component, OnInit } from '@angular/core';
import {QuoteCard} from "./quote-card-slide/quote-card-slide.component";
import {SwiperOptions} from "swiper";
import {QuoteCardsService} from "./quote-cards.service";


interface Classes {
  main: string
  leftPanel:  string
    content: string
      label: string
      header: string
      text: string
  rightPanel: string
    slider: string
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
    leftPanel: this.mainClass+'__left-panel',
      content: this.mainClass+'__content',
        label: this.mainClass+'__label',
        header: this.mainClass+'__header',
        text: this.mainClass+'__text',
    rightPanel: this.mainClass+'__right-panel',
      slider: this.mainClass+'__slider',
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
        1300: {
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

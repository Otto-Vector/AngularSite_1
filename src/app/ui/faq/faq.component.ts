import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {QuoteCard} from "../quotes/quote-card-slide/quote-card-slide.component";
import {QuoteCardsService} from "../quotes/quote-cards.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  quoteSwiper: QuoteCard[]
  constructor(
    readonly quoteCardsService : QuoteCardsService
  ) {
    this.quoteSwiper = [...quoteCardsService.quoteCards].reverse()
    }

  ngOnInit(): void {
  }
  swiperConfig2: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 50,
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
          }
        }
  }

}

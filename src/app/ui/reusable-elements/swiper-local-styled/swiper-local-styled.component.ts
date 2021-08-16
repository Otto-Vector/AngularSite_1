import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, {Pagination, Navigation, Autoplay, SwiperOptions} from "swiper/core";
SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-swiper-local-styled',
  templateUrl: './swiper-local-styled.component.html',
  styleUrls: ['./swiper-local-styled.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperLocalStyledComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

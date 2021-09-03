import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";

import {blogSwiperElement} from "./blog-swiper-element/blog-swiper-element.component";
import {ModalGalleryLocalService} from "./engine/modal-gallery-local.service";

import {SwiperOptions} from "swiper";
import {BlogSwiperElementService} from "./engine/blog-swiper-element.service";


interface Classes {
  main: string
  label: string
  header: string
  swiperWrapper : string
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {


  readonly main_class: string = 'blog'
  readonly blog : Classes = {
      main: this.main_class,
      label: this.main_class+'__label',
      header: this.main_class+'__header',
      swiperWrapper : this.main_class+'__swiper-wrapper'
    }

  textForLabel : string = 'our products'
  textForHeader : string = 'Start reading our blog'

  // подписчики здесь
  subs: Subscription | undefined

  constructor(
    private modalGalleryServiceLocal: ModalGalleryLocalService,
    private blogSwiperElementService : BlogSwiperElementService
  ) { }

  ngOnInit(): void {
    this.subs = this.modalGalleryServiceLocal.imageNumber$.subscribe( (n)=> {
      this.modalGalleryServiceLocal.openModal(1,n)
    })
  }

  swiperConfig: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        clickable: true
      },
      autoplay: {
        delay: 10000,
        pauseOnMouseEnter: true
      },
      navigation: true,
  }

   blogSwiper : blogSwiperElement[] = this.blogSwiperElementService.blogSwiper
}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";

import {blogSwiperElement} from "./blog-swiper-element/blog-swiper-element.component";


import SwiperCore, {Pagination, Navigation, Autoplay} from "swiper/core";
import {ModalGalleryLocalService} from "../../engine/modal-gallery-local.service";

SwiperCore.use([Pagination, Navigation, Autoplay]);

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
  encapsulation: ViewEncapsulation.None
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
    // private readonly viewImage : ImageClickerService
  ) { }

  ngOnInit(): void {
    this.subs = this.modalGalleryServiceLocal.imageNumber$.subscribe( (n)=> {
      this.modalGalleryServiceLocal.openModal(n,n)
    })
  }

   blogSwiper : blogSwiperElement[] = [
      {
        imagesId: [ ...this.modalGalleryServiceLocal.galleryImagesIds ],
        images: [ ...this.modalGalleryServiceLocal.galleryImagesPaths ],
        header: 'How to start planning',
        text: 'very small text.',
        link: "#Blog1"
    },
      {
        imagesId: [ ...this.modalGalleryServiceLocal.galleryImagesIds ].reverse(),
        images: [ ...this.modalGalleryServiceLocal.galleryImagesPaths ].reverse(),
        header: 'How to start planning2',
        text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
        link: "#Blog2"
     },
      {
        imagesId: [ ...this.modalGalleryServiceLocal.galleryImagesIds ],
        images: [ ...this.modalGalleryServiceLocal.galleryImagesPaths ],
        header: 'How to start planning3',
        text: 'VERY BIG TEXT Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore',
        link: "#Blog3"
    }
    ]
}

import { Injectable } from '@angular/core';
import {blogSwiperElement} from "../blog-swiper-element/blog-swiper-element.component";
import {ModalGalleryLocalService} from "./modal-gallery-local.service";

@Injectable({
  providedIn: 'root'
})
export class BlogSwiperElementService {



  constructor(
    private modalGalleryServiceLocal : ModalGalleryLocalService
  ) { }

    public blogSwiper : blogSwiperElement[] = [
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
        imagesId: [ ...this.modalGalleryServiceLocal.galleryImagesIds.slice(3,6) ],
        images: [ ...this.modalGalleryServiceLocal.galleryImagesPaths.slice(3,6) ],
        header: 'How to start planning3',
        text: 'VERY BIG TEXT Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore',
        link: "#Blog3"
    }
  ]
}

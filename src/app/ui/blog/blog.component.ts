import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {blogSwiperElement} from "./blog-swiper-element/blog-swiper-element.component";
import {
  Action,
  ButtonEvent,
  ButtonType,
  Image,
  ImageModalEvent,
  ModalGalleryService,
  ModalGalleryRef,
  ModalGalleryConfig,
  LibConfig, ButtonsStrategy
} from '@ks89/angular-modal-gallery';


import SwiperCore, {Pagination, Navigation, Autoplay} from "swiper/core";
import {GetButton} from "../reusable-elements/get-button/get-button.component";

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

  blogSwiper : blogSwiperElement[] = [
    {
    images: [
      '../../../../assets/images/blog/image1.jpg',
      '../../../../assets/images/blog/image2.jpg',
      '../../../../assets/images/blog/image3.jpg'
    ],
    header: 'How to start planning',
    text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
    link: "#Blog1"
  },
    {
    images: [
      '../../../../assets/images/blog/image2.jpg',
      '../../../../assets/images/blog/image1.jpg',
      '../../../../assets/images/blog/image3.jpg'
    ],
    header: 'How to start planning2',
    text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
    link: "#Blog2"
   },
    {
    images: [
      '../../../../assets/images/blog/image3.jpg',
      '../../../../assets/images/blog/image1.jpg',
      '../../../../assets/images/blog/image2.jpg',
    ],
    header: 'How to start planning3',
    text: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
    link: "#Blog3"
  }
  ]

  for_button : GetButton = {content:"VieW", mode: "gray", action: ()=>{this.openModal(0,1)}}
  // images: Image[];

  constructor(
    private modalGalleryService: ModalGalleryService) { }

  ngOnInit(): void {
  }

   images: Image[] = [
    new Image(0, {
      img: '../../../../assets/images/blog/image3.jpg',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: '../../../../assets/images/blog/image2.jpg',
      description: 'Description 2'
    }),
    new Image(
      2,
      {
        img: '../../../../assets/images/blog/image1.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(3, {
      img: '../../../../assets/images/blog/image2.jpg',
      description: 'Description 4',
      extUrl: 'http://www.google.com'
    }),
    new Image(4, { img: '../../../../assets/images/blog/image3.jpg' })
  ];

  openModal(id: number, imageIndex: number): void {
      const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
        id: id,
        images: this.images,
        currentImage: this.images[imageIndex],
          libConfig: {
            previewConfig: {
              visible: false
            },
            slideConfig: {
              infinite: true,
              sidePreviews: {
                show: false
              }
            },
          currentImageConfig: {
            downloadable: true
          },
          buttonsConfig: {
            visible: true,
            strategy: ButtonsStrategy.SIMPLE
          }
        } as LibConfig
      } as ModalGalleryConfig) as ModalGalleryRef;
    }

}

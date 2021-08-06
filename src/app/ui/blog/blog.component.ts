import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {blogSwiperElement} from "./blog-swiper-element/blog-swiper-element.component";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  blog: string = 'blog'
  label: string = this.blog+'__label'
  header: string = this.blog+'__header'
  swiperWrapper : string = this.blog+'__swiper-wrapper'

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
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

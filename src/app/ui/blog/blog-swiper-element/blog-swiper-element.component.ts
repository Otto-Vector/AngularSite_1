import {Component, Input, OnInit} from '@angular/core';
import {GetButton} from "../../reusable-elements/get-button/get-button.component";

export interface blogSwiperElement {
  images : [string,string,string]
  header : string
  text : string
  link : string
}

@Component({
  selector: 'app-blog-swiper-element',
  templateUrl: './blog-swiper-element.component.html',
  styleUrls: ['./blog-swiper-element.component.scss']
})
export class BlogSwiperElementComponent implements OnInit {

  blogSwiperElement : string = 'blog-swiper-element'
  images : string = this.blogSwiperElement + '__images'
  image1 : string = this.blogSwiperElement + '__image1'
  image2 : string = this.blogSwiperElement + '__image2'
  image3 : string = this.blogSwiperElement + '__image3'

  content : string = this.blogSwiperElement + '__content'
  header : string = this.blogSwiperElement + '__header'
  text : string = this.blogSwiperElement + '__text'
  buttons : string = this.blogSwiperElement + '__buttons'
  leftButton : string = this.blogSwiperElement + '__left-button'
  rightButton : string = this.blogSwiperElement + '__right-button'


  readButton : GetButton = {
    content: 'Read now',
    mode: "blue",
    action: () => {console.log('click')}
  }
  bookButton : GetButton = {
    content: 'Add to your bookmarks',
    mode: "white",
    action: () => {console.log('click2')}
  }

  @Input() thisElement : blogSwiperElement = {
    images: ['','',''],
    header: 'Some header',
    text : 'Some text Some text Some text',
    link : '#blog_to_read'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

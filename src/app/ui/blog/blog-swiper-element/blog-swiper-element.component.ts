import {Component, Input, OnInit} from '@angular/core';
import {GetButton} from "../../reusable-elements/get-button/get-button.component";

export interface blogSwiperElement {
  imagesId : number[]
  images : string[]
  header : string
  text : string
  link : string
}

interface Classes {
  main: string
    images: {
      main: string
      image: string
    },
    content: {
      main: string
      header: string
      text: string
      buttons: {
        main: string
        leftButton: string
        rightButton: string
      }
    }
  }

@Component({
  selector: 'app-blog-swiper-element',
  templateUrl: './blog-swiper-element.component.html',
  styleUrls: ['./blog-swiper-element.component.scss']
})
export class BlogSwiperElementComponent implements OnInit {

  main_class : string = 'blog-swiper-element'
  classBlog : Classes = {
    main: this.main_class,
    images: {
      main: this.main_class+'__images',
      image: this.main_class+'__image',
    },
    content: {
      main: this.main_class+'__content',
      header: this.main_class+'__header',
      text: this.main_class+'__text',
      buttons: {
        main: this.main_class+'__buttons',
        leftButton: this.main_class+'__left-button',
        rightButton: this.main_class+'__right-button'
      }
    }
  }

  imagePath :[string,string,string] =[
    '../../../../assets/images/blog/image1.jpg',
    '../../../../assets/images/blog/image2.jpg',
    '../../../../assets/images/blog/image3.jpg',
  ]
  imageGradient : string[] = [
    'linear-gradient(13.46deg, rgba(255, 199, 53, 0.44) 1.89%, rgba(255, 227, 154, 0.93) 1.9%, rgba(255, 159, 90, 0) 68.24%)',
    'linear-gradient(27.48deg, rgba(255, 53, 53, 0.48) 14.02%, rgba(255, 179, 90, 0) 68%)',
    'linear-gradient(13.49deg, rgba(53, 170, 255, 0.68) 11.59%, rgba(90, 136, 255, 0) 96.88%)'
    ]



  @Input() thisElement : blogSwiperElement = {
    imagesId: [0,1,2],
    images: [...this.imagePath],
    header: 'How to start planning',
    text : 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
    link : '#blog_to_read'
  }

  invisibleText : string = ''

  readButton : GetButton = {
    content: 'Read now',
    mode: "blue",
    action: () => {console.log(this.thisElement.link)}
  }
  bookButton : GetButton = {
    content: 'Add to your bookmarks',
    mode: "white",
    action: () => {console.log(this.thisElement.link)}
  }

  constructor() {
  }

  ngOnInit(): void {
    this.textCorrectTo(235)
  }

  // изменение количества символов в контенте, для корректного отображения
  textCorrectTo(length: number):void {
    if (this.thisElement.text.length >= length) {
      this.thisElement.text = this.thisElement.text.slice(0, length) + ' ...'
    } else {
      this.invisibleText = this.invisibleText.padEnd(length - this.thisElement.text.length, ' _')
    }
  }
}

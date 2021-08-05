import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: string = 'blog'
  label: string = this.blog+'__label'
  header: string = this.blog+'__header'
  swiperWrapper : string = this.blog+'slider-wrapper'

  textForLabel : string = 'our products'
  textForHeader : string = 'Start reading our blog'

  constructor() { }

  ngOnInit(): void {
  }

}

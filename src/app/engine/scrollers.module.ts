import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxScrollspyModule} from "@uniprank/ngx-scrollspy";
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPageScrollCoreModule.forRoot({ duration: 400 }),
    NgxScrollspyModule.forRoot()
  ],
  exports: [
    NgxPageScrollCoreModule,
    NgxScrollspyModule
  ]
})
export class ScrollersModule { }

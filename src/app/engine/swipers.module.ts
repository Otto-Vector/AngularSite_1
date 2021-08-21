import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// свайперы
import { SwiperModule } from "swiper/angular";
// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// import { SwiperLocalStyledComponent } from './ui/reusable-elements/swiper-local-styled/swiper-local-styled.component';
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>
// *************************************************************************


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SwiperModule,
    GalleryModule,
  ],
  exports: [
    SwiperModule,
    GalleryModule,
  ]
})
export class SwipersModule { }

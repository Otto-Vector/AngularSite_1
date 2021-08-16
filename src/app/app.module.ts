import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HeaderComponent } from './ui/header/header.component';
import { HeroImageComponent } from './ui/hero-image/hero-image.component';
import { CustomersComponent } from './ui/customers/customers.component';
import { PlanAndManageComponent } from './ui/plan-and-manage/plan-and-manage.component';
import { FeaturesComponent } from './ui/features/features.component';
import { StatsComponent } from './ui/stats/stats.component';
import { BlogComponent } from './ui/blog/blog.component';
import { QuotesComponent } from './ui/quotes/quotes.component';
import { GetStartedComponent } from './ui/get-started/get-started.component';
import { FaqComponent } from './ui/faq/faq.component';
import { NewsletterComponent } from './ui/newsletter/newsletter.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavMenuComponent } from './ui/header/nav-menu/nav-menu.component';
import { LogoComponent } from './ui/header/logo/logo.component';
import { SocialsComponent } from './ui/header/socials/socials.component';
import { GetButtonComponent } from './ui/reusable-elements/get-button/get-button.component';
import { ViewButtonComponent } from './ui/hero-image/view-button/view-button.component';
import { SliderButtonComponent } from './ui/hero-image/slider-button/slider-button.component';
import { LabelComponent } from './ui/reusable-elements/label/label.component';
import { ButtonViewComponent } from './ui/plan-and-manage/button-view/button-view.component';
import { ButtonSeeComponent } from './ui/plan-and-manage/button-see/button-see.component';
import { HeaderSmallComponent } from './ui/reusable-elements/header-small/header-small.component';
import { FeatureCardComponent } from './ui/features/features-cards/feature-card/feature-card.component';
import { FeaturesCardsComponent } from './ui/features/features-cards/features-cards.component';
import { BlogSwiperElementComponent } from './ui/blog/blog-swiper-element/blog-swiper-element.component';
import { ViewImageButtonComponent } from './ui/blog/blog-swiper-element/view-image-button/view-image-button.component';
import {CommonModule} from "@angular/common";

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
import { QuoteCardSlideComponent } from './ui/quotes/quote-card-slide/quote-card-slide.component';
import { SwiperLocalStyledComponent } from './ui/reusable-elements/swiper-local-styled/swiper-local-styled.component';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>
// *************************************************************************

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HeaderComponent,
    HeroImageComponent,
    CustomersComponent,
    PlanAndManageComponent,
    FeaturesComponent,
    StatsComponent,
    BlogComponent,
    QuotesComponent,
    GetStartedComponent,
    FaqComponent,
    NewsletterComponent,
    FooterComponent,
    NavMenuComponent,
    LogoComponent,
    SocialsComponent,
    GetButtonComponent,
    ViewButtonComponent,
    SliderButtonComponent,
    LabelComponent,
    ButtonViewComponent,
    ButtonSeeComponent,
    HeaderSmallComponent,
    FeatureCardComponent,
    FeaturesCardsComponent,
    BlogSwiperElementComponent,
    ViewImageButtonComponent,
    QuoteCardSlideComponent,
    SwiperLocalStyledComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    CommonModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
